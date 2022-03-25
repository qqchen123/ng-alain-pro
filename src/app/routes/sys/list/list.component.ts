import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STData} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {SysEditComponent} from "../edit/edit.component";
import {SysEditpageComponent} from "../editpage/editpage.component";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-sys-list',
  templateUrl: './list.component.html',
})
export class SysListComponent implements OnInit {
  users: STData[] = [];
  url = `/user`;
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
    {title: '编号', index: 'no', render: 'noTpl'},
    {title: '调用次数', type: 'number', index: 'callNo', render: 'callNoTpl'},
    {title: '头像', type: 'img', width: '50px', index: 'avatar'},
    {title: '时间', type: 'date', index: 'updatedAt'},
    {
      title: '',
      buttons: [
        { text: '查看', click: (item: any) => this.edit() },
        { text: '编辑', type: 'static', component: SysEditpageComponent, click: (i)=>this.editbark(i) },
        {
          text: `Edit`,
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true),
        },
        {
          text: `Save`,
          iif: i => i.edit,
          click: i => {
            this.submit(i);
          },
        },
        {
          text: `Cancel`,
          iif: i => i.edit,
          click: i => this.updateEdit(i, false),
        },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private msg: NzMessageService) {
  }

  ngOnInit(): void {
    // this.http.get("user/1").subscribe(res => {this.users = res.json})
    this.http.get(`/user/1`).subscribe(res => (this.users = res));
  }

  add(): void {
    this.modal
      .createStatic(SysEditpageComponent, {i: {id: 0}})
      .subscribe(() => this.st.reload());
  }

  private edit(): void{
    this.modal
      .createStatic(SysEditComponent, {i: {id: 0}})
      .subscribe(() => this.st.reload());
  }

  private editbark(id:any): void{
    this.modal
      .createStatic(SysEditpageComponent, {i: {id: id.id}})
      .subscribe(() => this.st.reload());
  }
  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, {edit}, {refreshSchema: true});
  }

  private submit(i: STData): void {
    this.msg.success(JSON.stringify(this.st.pureItem(i)));
    this.updateEdit(i, false);
  }
}
