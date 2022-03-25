import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STData, STPage} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {ProjectPropageEditComponent} from "./edit/edit.component";
import {ProjectPropageViewComponent} from "./view/view.component";

@Component({
  selector: 'app-project-propage',
  templateUrl: './propage.component.html',
})
export class ProjectPropageComponent implements OnInit {
  url: any[] = [];
  pi: any = 1;
  ps: any = 10;
  total: any;

  pageInfo: STPage = {
    front: false,
    total: false,
    pageSizes: [10, 20, 30, 40, 50],
    showSize: true,
    showQuickJumper: true
  }

  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    {title: '编号', index: 'proId'},
    {title: '项目名称', index: 'projectName'},
    {title: 'PMO', index: 'pmo'},
    {title: 'SPONSOR', index: 'sponsor'},
    {title: 'TECHNOLOGY', index: 'technology'},
    {title: 'CUSTOMER', index: 'customer'},
    {title: 'APPLICATIOIN', index: 'application'},
    {title: 'CREAET_TIME', index: 'createTime'},
    {title: 'UPDATE_TIME', index: 'updateTime'},
    {
      title: '',
      buttons: [
        // {text: '查看', click: (item: any) => `/form/${item.id}`},
        {text: '查看', click: (item: any) => this.view(item)},
        // {text: '编辑', type: 'static', component: ProjectPropageEditComponent, click: 'reload'},
        {text: '编辑', click: (item: any) => this.edit(item)},
        {text: '删除', click: (item: any) => this.delete(item)},
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) {
    this.http.get(`http://localhost:8080/api/project/getProjectList?pageNum=${this.pi}&pageSize=${this.ps}`).subscribe((res: any) => {
      // console.log(res)
      this.url = Array(res.data.list.length).fill({}).map((item: any, idx: number) => {
        return {
          proId: res.data.list[idx].proId,
          projectName: res.data.list[idx].projectName,
          pmo: res.data.list[idx].pmo,
          sponsor: res.data.list[idx].sponsor,
          technology: res.data.list[idx].technology,
          customer: res.data.list[idx].customer,
          application: res.data.list[idx].application,
          createTime: res.data.list[idx].createTime,
          updateTime: res.data.list[idx].updateTime
        }
      });
      this.total = res.data.total;
      this.ps = res.data.pageSize;
      this.pi = res.data.pageNum;
    })
  }

  ngOnInit(): void {
  }

  change(e: any) {
    if (e.type == 'pi') {
      this.http.get(`http://localhost:8080/api/project/getProjectList?pageNum=${e.pi}&pageSize=${e.ps}`).subscribe((res: any) => {
        this.url = Array(res.data.list.length).fill({}).map((item: any, idx: number) => {
          return {
            proId: res.data.list[idx].proId,
            projectName: res.data.list[idx].projectName,
            pmo: res.data.list[idx].pmo,
            sponsor: res.data.list[idx].sponsor,
            technology: res.data.list[idx].technology,
            customer: res.data.list[idx].customer,
            application: res.data.list[idx].application,
            createTime: res.data.list[idx].createTime,
            updateTime: res.data.list[idx].updateTime
          }
        });
        this.total = res.data.total;
        this.ps = res.data.pageSize;
        this.pi = res.data.pageNum;
      })
    }
  }

  add(): void {
    this.modal
      .createStatic(ProjectPropageEditComponent, {record: {id: 10}})
      .subscribe(() => this.st.reload());
  }

  edit(item: any): void {
    console.log(item)
    this.modal
      .createStatic(ProjectPropageEditComponent, {record: {id: item.proId}})
      .subscribe(() => this.st.reload());
  }

  private view(item: any): void {
    console.log(item.proId)
    this.modal
      .createStatic(ProjectPropageViewComponent, {record: {id: item.proId}})
      .subscribe(() => this.st.reload());
  }

  private delete(item: any) {
    this.http.post(`http://localhost:8080/api/project/delete/${item.proId}`).subscribe((res: any) => {
      this.st.reload();
    })
  }
}
