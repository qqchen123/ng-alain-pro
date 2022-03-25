import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STPage, STReq, STRes} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';

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
    params: {proId: 123,projectName:'wwww',pmo:'ddd'}
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
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  ngOnInit(): void {
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}