import {Component, OnInit} from '@angular/core';
import {SFSchema, SFUISchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-project-propage-edit',
  templateUrl: './edit.component.html',
})
export class ProjectPropageEditComponent implements OnInit {

  projectInfo: any;
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      // no: { type: 'string', title: '编号' },
      projectName: {type: 'string', title: '项目名称', maxLength: 50},
      pmo: {type: 'string', title: 'PMO'},
      sponsor: {type: 'string', title: 'SPONSOR'},
      technology: {type: 'string', title: 'TECHNOLOGY', maxLength: 140},
      customer: {type: 'string', title: 'CUSTOMER', maxLength: 140},
      application: {type: 'string', title: 'APPLICATION', maxLength: 140},
      keyWords: {type: 'string', title: 'KEY_WORDS', maxLength: 140},
      filePath: {type: 'string', title: 'ATTACH_FILE', format: 'uri'},

    },
    required: ['owner', 'callNo', 'href', 'description'],
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
    // if (this.record.id > 0)
    //   this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
    console.log(this.record)
    this.http.get(`http://localhost:8080/api/project/getProjectInfo/${this.record.id}`).subscribe((res: any) => {
      // console.log(res)
      this.projectInfo = res.data;
    })
  }

  save(value: any): void {
    this.http.post(`http://localhost:8080/api/project/editPro`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
