import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STData, STPage, STReq, STRes} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {MaterialPropageEditComponent} from "./edit/edit.component";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-material-propage',
  templateUrl: './propage.component.html',
})
export class MaterialPropageComponent implements OnInit {

  @Input()
  cateId: any;

  @Input()
  projectId: any;

  material: STData[] = [];
  pi: any = 1;
  ps: any = 10;
  total: any;

  page = {
    front: false,
  }
  url = `http://localhost:8080/api/material/allmaterialList`;
  resInfo: STRes = {
    reName: {total: "data.total", list: "data.list"}
  }

  reqInfo: STReq = {
    reName: {pi: 'pageNum', ps: 'pageSize'},
    params: {}
  }

  pageInfo: STPage = {
    front: false,
    total: false,
    pageSizes: [10, 20, 30, 40, 50],
    showSize: true,
    showQuickJumper: true
  }
  searchSchema: SFSchema = {
    properties: {
      category: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    {title: 'MATERIAL_ID', index: 'materialId'},
    {title: 'CATEGORY', index: 'category'},
    {title: 'MATERIAL', index: 'material'},
    {title: 'PROJECT_ID', index: 'projectId'},
    {title: 'CATE_ID', index: 'cateId'},
    {title: 'CREATE_TIME', index: 'createTime'},
    {title: 'UPDATE_TIME', index: 'updateTime'},

    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        {
          text: '编辑', click: (item: any) => {
            console.log(item)
            this.edit(item.materialId)
          }
        },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.reqInfo.params.catId = this.cateId;
    this.reqInfo.params.projectId = this.projectId;
  }

  materialSubmit(value: any) {
    let params;
    if (value.category) {
      params = {pageNum: this.pi, pageSize: this.ps, category: value.category};
    } else {
      params = {pageNum: this.pi, pageSize: this.ps};
    }
    this.materialList(params);
  }

  change(e: any) {
    // console.log(e)
  }

  materialList(params: any) {
    this.http.get(
      `http://localhost:8080/api/material/allmaterialList`,
      params
    ).subscribe((res: any) => {
      this.material = res.data.list;
      this.total = res.data.total;
      this.ps = res.data.pageSize;
      this.pi = res.data.pageNum;
    })
  }

  edit(id: any): void {
    this.modal
      .createStatic(MaterialPropageEditComponent, {record: {id: id}})
      .subscribe(() => this.st.reload());
  }

  add(): void {
    this.modal
      .createStatic(MaterialPropageEditComponent, {record: {id: 0}})
      .subscribe(() => this.st.reload());
  }

}
