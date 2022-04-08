import { Component, OnInit } from '@angular/core';
import {SFSchema, SFTreeSelectWidgetSchema, SFUISchema} from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-cates-propage-edit',
  templateUrl: './edit.component.html',
})
export class CatesPropageEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      // no: { type: 'string', title: '编号' },
      // owner: { type: 'string', title: '姓名', maxLength: 15 },
      // callNo: { type: 'number', title: '调用次数' },
      // href: { type: 'string', title: '链接', format: 'uri' },
      // description: { type: 'string', title: '描述', maxLength: 140 },

      parentId: {
        type: 'string',
        title: 'parentId',
        enum:[
          { title: 'M0', key: '1' },
          { title: 'T0', key: '2' },
          { title: 'T1', key: '4' },
          { title: 'T2', key: '5' },
        ],
        default: '0',
        ui: {
          widget: 'tree-select',
        } as SFTreeSelectWidgetSchema,
      },
      cateName: { type: 'string', title: 'cateName' },

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
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {}

  ngOnInit(): void {
    if (this.record.id > 0)
    this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
  }

  save(value: any): void {
    this.http.post(`http://localhost:8080/api/cate/cateInfo`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
