import {Component, OnInit} from '@angular/core';
import {SFSchema, SFUISchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {fi_FI} from "ng-zorro-antd/i18n";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzUploadFile} from "ng-zorro-antd/upload";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-material-propage-edit',
  templateUrl: './edit.component.html',
})
export class MaterialPropageEditComponent implements OnInit {
  form!: FormGroup;
  record: any = {};
  i: any;
  materialInfo:any={};
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
      // console.log(data)
      this.materialInfo.cateId=data.cateId;
      this.materialInfo.projectId=data.projectId;
      if (data.id){
        this.http.get(`http://localhost:8080/api/material/getMaterial/`+data.id).subscribe((res: any) => {
          this.materialInfo = res.data;
          // const split = this.materialInfo.filePath.split('/');
          // this.downloadBaseUrl=this.downloadBaseUrl+'?bucketName='+split[3]+'&filePath='+split[4]+'/'+split[5]+'&originalName='+split[5];
        })
      }
    })
    //----------------------------------------------------------
    this.form = this.fb.group({
      category: [null, [Validators.required]],
      material: [null, []],
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
      this.materialInfo.filePath = res.data;
    });
  }

  submit(): void {
    this.submitting = true;
    let url;

    if (this.materialInfo.materialId){
      url = 'http://localhost:8080/api/material/editMaterial';
    }else{
      url = 'http://localhost:8080/api/material/insertMaterial';
    }
    // console.log(this.fileInfo)
    // return;
    this.http.post(url, this.materialInfo).subscribe(res => {
      // console.log(res)
      this.submitting = false;
    });
  }

  goback() {
    window.history.go(-1);
  }
}
