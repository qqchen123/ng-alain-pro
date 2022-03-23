import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sys-editpage',
  templateUrl: './editpage.component.html',
})
export class SysEditpageComponent implements OnInit {

  // id = this.route.snapshot.params.id;
  id = this.route.snapshot.params;
  i: any;
  schema: SFSchema = {
    properties: {
      no: { type: 'string', title: '编号' },
      owner: { type: 'string', title: '姓名', maxLength: 15 },
      callNo: { type: 'number', title: '调用次数' },
      href: { type: 'string', title: '链接', format: 'uri' },
      description: { type: 'string', title: '描述', maxLength: 140 },
    },
    required: ['owner', 'callNo', 'href', 'description'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $no: {
      widget: 'text'
    },
    $href: {
      widget: 'string',
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {}

  ngOnInit(): void {
    // if (this.id > 0)
    // this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
    this.http.get(`/user/1`).subscribe(res => (this.i = res));
  }

  save(value: any): void {
    // this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
    this.http.post(`/user/1`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      // this.modal.close(true);
    });
  }
}
