import {Component, OnInit} from '@angular/core';
import {SFSchema, SFSelectWidgetSchema, SFUISchema, SFUploadWidgetSchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-category-propage-edit',
  templateUrl: './edit.component.html',
})
export class CategoryPropageEditComponent implements OnInit {
  record: any = {};
  i: any;

    myfileList: any = [];

  schema: SFSchema = {
    properties: {
      projectName: {type: 'string', title: '项目名称', maxLength: 50},
      pmo: {
        type: 'string',
        title: 'PMO',
        enum: [
          {label: 'Y', value: 'Y'},
          {label: 'N', value: 'N'},
        ],
        default: 'N',
        ui: {
          widget: 'select',
          change: (value, orgData) => console.log(value, orgData),
        } as SFSelectWidgetSchema,
      },
      sponsor: {type: 'string', title: 'SPONSOR'},
      technology: {type: 'string', title: 'TECHNOLOGY', maxLength: 140},
      customer: {type: 'string', title: 'CUSTOMER', maxLength: 140},
      application: {type: 'string', title: 'APPLICATION', maxLength: 140},
      keyWords: {type: 'string', title: 'KEY_WORDS', maxLength: 140},
      filePath: {
        type: 'string',
        title: 'ATTACH_FILE',
        limit: 1,

        ui: {
          widget: 'upload',
          action: 'http://localhost:8080/api/minio/upload',
          resReName: 'data',
          urlReName: 'url',
          data: {'bucketName': 'jsbucket'},
          fileList: this.myfileList,
          download: file => {
            console.log(file)
            // this.dowload();
          },
          change: file => {
            // console.log(file)
            let fileList = [...file.fileList];
            fileList = fileList.slice(-1);
            fileList = fileList.map(file => {
              if (file.response) {
                file.url = file.response.data;
              }
              return file;
            });
            this.myfileList = fileList;
            console.log(this.myfileList)
          }
        } as SFUploadWidgetSchema,
      },
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
    // this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
    if (this.record.id) {
      this.http.get(`http://localhost:8080/api/project/getProjectInfo/${this.record.id}`).subscribe((res: any) => {
        this.i = res.data;
        this.myfileList = [{
          uid: '-1',
          name: res.data.filePath,
          status: 'done',
          url: res.data.filePath
        }];
      })
    } else {
      this.i = true
    }
  }


  save(value: any): void {
    let url = '';
    if (value.proId) {
      url = 'http://localhost:8080/api/project/editPro';
    } else {
      url = 'http://localhost:8080/api/project/insertPro';
    }
    this.http.post(url, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close(): void {
    this.modal.destroy();
  }

  dowload(): void {
    window.location.href = `http://localhost:8080/api/minio/download?bucketName=jsbucket&file=run.sh`
  }
}
