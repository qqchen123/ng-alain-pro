import {Component, OnInit} from '@angular/core';
import {SFSchema, SFUISchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {fi_FI} from "ng-zorro-antd/i18n";

@Component({
  selector: 'app-material-propage-edit',
  templateUrl: './edit.component.html',
})
export class MaterialPropageEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      // no: { type: 'string', title: '编号' },
      // owner: { type: 'string', title: '姓名', maxLength: 15 },
      // callNo: { type: 'number', title: '调用次数' },
      // href: { type: 'string', title: '链接', format: 'uri' },
      // description: { type: 'string', title: '描述', maxLength: 140 },
      category: {type: 'string', title: 'CATEGORY'},
      material: {type: 'string', title: 'MATERIAL'},
      projectId: {type: 'string', title: 'PROJECT_ID'},
      cateId: {type: 'string', title: 'CATE_ID'},

    },
    // required: ['owner', 'callNo', 'href', 'description'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: {span: 12},
    },
    $no: {
      widget: 'text'
    },
    $href: {
      widget: 'string',
    },
    $description: {
      widget: 'textarea',
      grid: {span: 24},
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {
  }

  ngOnInit(): void {
    console.log(this.record)
    if (this.record.id > 0){
      this.http.get(`http://localhost:8080/api/material/getMaterial/${this.record.id}`).subscribe((res: any) => {
        this.i = res.data;
      })
    }else{
      this.i=1;
    }

  }

  save(value: any): void {
    console.log(value)
    let url;
    if (value.materialId){
      url='http://localhost:8080/api/material/editMaterial';
    }else {
      url='http://localhost:8080/api/material/insertMaterial'
    }
    this.http.post(url, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
