import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STPage, STReq, STRes} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {CatesPropageEditComponent} from "./edit/edit.component";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-cates-propage',
  templateUrl: './propage.component.html',
})
export class CatesPropageComponent implements OnInit {
  url = `http://localhost:8080/api/cate/cateList`;


  resInfo: STRes = {
    reName: {total: "data.total", list: "data.list"}
  }
  reqInfo: STReq = {
    reName: {pi: 'pageNum', ps: 'pageSize'},
    // params: {proId: 123,projectName:'wwww',pmo:'ddd'}
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
      },
      cateName: {
        type: 'string',
        title: '分类名称'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    {title: 'cateId', index: 'cateId'},
    {title: 'cateName', index: 'cateName'},
    {title: 'tableInfo', index: 'tableInfo'},
    {title: 'parentCate', index: 'parentCate'},
    {
      title: '',
      buttons: [
        {text: '查看'},
        {
          text: '编辑', click: (item:any) => {
            // console.log(item)
            // return
            let navigationExtras: NavigationExtras = {
              queryParams: { 'id': item.cateId },
            };
            this.router.navigate(['/cates/edit'],navigationExtras)
          }
        },
      ]
    }
  ];

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    public route: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  add(): void {
    // this.route
  }

}
