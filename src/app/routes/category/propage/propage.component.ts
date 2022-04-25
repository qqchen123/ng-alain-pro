import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STColumnBadge, STColumnTag, STComponent, STPage, STReq, STRes} from '@delon/abc/st';
import {SFDateWidgetSchema, SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {subWeeks} from 'date-fns';
import {CategoryPropageEditComponent} from "./edit/edit.component";
import {Router, NavigationExtras} from "@angular/router";
import {ProjectPropageEditComponent} from "../../project/propage/edit/edit.component";
import {ProjectPropageViewComponent} from "../../project/propage/view/view.component";


const TAG: STColumnTag = {
  1: { text: '未开始', color: 'red' },
  2: { text: '进行中', color: 'blue' },
  3: { text: '已完成', color: 'green' },
};

@Component({
  selector: 'app-category-propage',
  templateUrl: './propage.component.html',
})
export class CategoryPropageComponent implements OnInit {

  url = `http://localhost:8080/api/project/getProjectList`;

  resInfo: STRes = {
    reName: {total: "data.total", list: "data.list"}
  }

  reqInfo: STReq = {
    reName: {pi: 'pageNum', ps: 'pageSize'},
    params: {proId: 123, projectName: 'wwww', pmo: 'ddd'}
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
      projectName: {
        type: 'string',
        title: '项目名称'
      },
      sponsor: {
        type: 'string',
        title: 'SPONSOR'
      },
      technology: {
        type: 'string',
        title: 'TECHNOLOGY'
      },
      start: {
        type: 'string',
        ui: {
          widget: 'date',
          mode: 'range',
          end: 'end',
          format: 'yyyy/MM/dd HH:mm:ss',
          type: 'datetime-local'
        } as SFDateWidgetSchema,
      },
      end: {
        type: 'string',
        default: subWeeks(new Date(), 6),
      },
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
    {title: 'M0', index: 'm0Status',type: 'tag', tag: TAG},
    {title: 'T0', index: 't0Status',type: 'tag', tag: TAG},
    {title: 'T1', index: 't1Status',type: 'tag', tag: TAG},
    {title: 'T2', index: 't2Status',type: 'tag', tag: TAG},
    {title: 'CREAET_TIME', index: 'createTime'},
    {title: 'UPDATE_TIME', index: 'updateTime'},
    {
      title: '操作',
      buttons: [
        {
          text: '详情', click: (item: any) => {
            this.todetails(item);
          }
        },
        {text: '查看', click: (item: any) => this.view(item)},
        {text: '编辑', click: (item: any) => this.edit(item)},
        {text: '删除', click: (item: any) => this.delete(item)},
      ],
      resizable: { minWidth: 150 }
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private router: Router) {
  }

  ngOnInit(): void {
  }

  add(): void {
    this.modal
      .create(ProjectPropageEditComponent, {i: {id: 0}})
      .subscribe(() => this.st.reload());
  }

  todetails(item: any) {
    let queryParams: NavigationExtras = {
      queryParams: {
        'projectId': item.proId,
        'projectName':item.projectName,
      }
    }
    this.router.navigate(['projectdetails/proheader'], queryParams);
  }

  edit(item: any): void {
    this.modal
      .createStatic(CategoryPropageEditComponent, {record: {id: item.proId}})
      .subscribe(() => this.st.reload());
  }

  private view(item: any): void {
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
