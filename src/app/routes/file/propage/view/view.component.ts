import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import {NzUploadFile} from "ng-zorro-antd/upload";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-file-propage-view',
  templateUrl: './view.component.html',
})
export class FilePropageViewComponent implements OnInit {
  form!: FormGroup;
  record: any = {};
  i: any;
  fileInfo:any={};
  uploading = false;
  fileList: NzUploadFile[] = [];
  downloadBaseUrl='http://localhost:8080/api/minio/downloadFile';
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private msgSrv: NzMessageService,
    private http: _HttpClient,
    public route:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((data:any)=>{
      console.log(data)
      this.fileInfo.cateId=data.cateId;
      this.fileInfo.projectId=data.projectId;
      if (data.id){
        this.http.get(`http://localhost:8080/api/file/getFileInfo/`+data.id).subscribe((res: any) => {
          this.fileInfo = res.data;
          const split = this.fileInfo.filePath.split('/');
          this.downloadBaseUrl=this.downloadBaseUrl+'?bucketName='+split[3]+'&filePath='+split[4]+'/'+split[5]+'&originalName='+split[5];
        })
      }
    })
    //----------------------------------------------------------
    this.form = this.fb.group({
      fileName: [null, [Validators.required]],
      filePath: [null, []],
    });
  }

  close(): void {
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
      this.fileInfo.filePath = res.data;
    });
  }

  submit(): void {
    this.submitting = true;
    let url;

    if (this.fileInfo.fileId){
       url = 'http://localhost:8080/api/file/editPro';
    }else{
       url = 'http://localhost:8080/api/file/insertFile';
    }
    // console.log(this.fileInfo)
    // return;
    this.http.post(url, this.fileInfo).subscribe(res => {
      // console.log(res)
      this.submitting = false;
    });
  }

  goback() {
    window.history.go(-1);
  }
}
