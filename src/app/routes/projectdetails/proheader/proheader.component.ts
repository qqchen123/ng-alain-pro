import {Component, Input, OnInit} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import {ActivatedRoute} from "@angular/router";
import {SFSchema, SFSelectWidgetSchema, SFUISchema, SFUploadWidgetSchema} from "@delon/form";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-projectdetails-proheader',
  templateUrl: './proheader.component.html',
})
export class ProjectdetailsProheaderComponent implements OnInit {
  projectId: any;
  projectName: any;
  procedureCate: any;
  projectInfos: any;
  viewUser:any;

  schema: SFSchema = {
    properties: {
      // no: { type: 'string', title: '编号' },
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
        limit:1,
        enum: [

        ],
        ui: {
          widget: 'upload',
          action: 'http://localhost:8080/api/minio/upload',
          resReName: 'resource_id',
          urlReName: 'url',
          data:{'bucketName':'jsbucket'},
          download: file => {
            this.dowload();
          },
          change: file=>{
            console.log(file)
            if (file.type=='success'){
              if (file.file.response.code==400){
                this.msgSrv.error(file.file.response.data);
              }else{
                file.fileList.splice(0,1)
                this.msgSrv.success(file.file.response.data);
              }
            }
          }
        } as SFUploadWidgetSchema,
      },
    },
    required: ['owner', 'callNo', 'href', 'description'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 8 },
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

  constructor(private http: _HttpClient,private msgSrv: NzMessageService, public activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe((data: any) => {
      this.projectId = data.projectId;
      this.projectName = data.projectName;
      // this.getProjectInfo(data.projectId);
    })
  }

  ngOnInit(): void {
    this.getProcedureInfo();
    this.getProjectInfos(4)
  }


  getProcedureInfo() {
    this.http.get(`http://localhost:8080/api/cate/getCatesbyPid/0`).subscribe((res: any) => {
      this.procedureCate = res.data;
    });
  }


  getProjectInfos(projectId:any) {
    this.http.get(`http://localhost:8080/api/project/getProjectInfo/${this.projectId}`).subscribe((res: any) => {
      this.viewUser = res.data;
    })
  }
  dowload():void{
    window.location.href = `http://localhost:8080/api/minio/download?bucketName=jsbucket&file=run.sh`
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
      // this.modal.close(true);
    });
  }

  goback() {
    window.history.go(-1)
  }


}
