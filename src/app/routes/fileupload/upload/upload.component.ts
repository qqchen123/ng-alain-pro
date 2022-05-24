import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {SFSchema, SFUploadWidgetSchema} from "@delon/form";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-fileupload-upload',
  templateUrl: './upload.component.html',
})
export class FileuploadUploadComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      file: {
        type: 'string',
        title: '单个文件',
        enum: [
          {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            response: {
              resource_id: 1,
            },
          },
        ],
        ui: {
          widget: 'upload',
          action: '/upload',
          resReName: 'resource_id',
          urlReName: 'url',
        } as SFUploadWidgetSchema,
      }
    },
  };

  constructor(private http: _HttpClient,private msg: NzMessageService) { }

  ngOnInit(): void { }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

}
