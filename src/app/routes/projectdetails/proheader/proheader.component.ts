import {Component, Input, OnInit} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import {ActivatedRoute} from "@angular/router";
import {SFSchema, SFSelectWidgetSchema, SFUISchema, SFUploadWidgetSchema} from "@delon/form";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-projectdetails-proheader',
  templateUrl: './proheader.component.html',
  styles: [
    `
      .ant-advanced-search-form {
        padding: 24px;
        background: #fbfbfb;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
      }

      .search-result-list {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      [nz-form-label] {
        overflow: visible;
      }

      nz-form-label {
        width: 120px;
      }

      button {
        margin-left: 8px;
      }

      .collapse {
        margin-left: 8px;
        font-size: 12px;
      }
    `
  ]
})
export class ProjectdetailsProheaderComponent implements OnInit {
  projectId: any;
  projectName: any;
  procedureCate: any;
  projectInfos: any = {};

  validateForm!: FormGroup;

  fileInfo:any={};
  uploading = false;
  fileList: NzUploadFile[] = [];


  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(
    private http: _HttpClient,
    private msgSrv: NzMessageService,
    public activateRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.activateRoute.queryParams.subscribe((data: any) => {
      this.projectId = data.projectId;
      this.projectName = data.projectName;
      this.getProjectInfos(data.projectId);
    })
  }

  ngOnInit(): void {
    this.getProcedureInfo();


    this.validateForm = this.fb.group({
      projectName: [null, [Validators.required]],
      pmo: [null, [Validators.required]],
      sponsor: [null, [Validators.required]],
      technology: [null, [Validators.required]],
      customer: [null, [Validators.required]],
      application: [null, [Validators.required]],
      keyWords: [null, [Validators.required]],
      filePath: [null, [Validators.required]],
    });
  }


  getProcedureInfo() {
    this.http.get(`http://localhost:8080/api/cate/getCatesbyPid/0`).subscribe((res: any) => {
      this.procedureCate = res.data;
    });
  }


  getProjectInfos(projectId: any) {
    this.http.get(`http://localhost:8080/api/project/getProjectInfo/${this.projectId}`).subscribe((res: any) => {
      this.projectInfos = res.data;
    })
  }

  dowload(): void {
    window.location.href = `http://localhost:8080/api/minio/download?bucketName=jsbucket&file=run.sh`
  }

  goback() {
    window.history.go(-1)
  }


  submitForm() {
    console.log(this.projectInfos)
    // return;
    let url;
    if (this.projectInfos.proId) {
      url = 'http://localhost:8080/api/project/editPro';
    } else {
      url = 'http://localhost:8080/api/project/insertPro';
    }
    this.http.post(url, this.projectInfos).subscribe(res => {
      this.msgSrv.success('保存成功');
    });
  }


  beforeUpload = (file: NzUploadFile): boolean => {
    let fileList = [file];
    fileList = fileList.slice(-1);
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    this.fileList = fileList;
    return false;
  };

  handleUpload(): void {
    const formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('file', file);
    });
    this.uploading = true;
    this.http.post("http://localhost:8080/api/minio/upload", formData).subscribe((res: any) => {
      this.uploading = false;
      // this.fileInfo.filePath = res.data;
      this.projectInfos.filePath=res.data;
    });
  }
}
