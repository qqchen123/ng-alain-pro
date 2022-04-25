import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SFSchema, SFUISchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-category-cateedit',
  templateUrl: './cateedit.component.html',
})
export class CategoryCateeditComponent implements OnInit {
  form!: FormGroup;
  submitting = false;
  projectInfo: any;
  uploading = false;
  fileList: NzUploadFile[] = [];
  downloadUrl='http://localhost:8080/api/minio/downloadFile';

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private cdr: ChangeDetectorRef,
    public http: _HttpClient
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      projectName: [null, [Validators.required]],
      pmo: [null, [Validators.required]],
      sponsor: [null, [Validators.required]],
      technology: [null, [Validators.required]],
      customer: [null, []],
      application: [null, []],
      keyWords: [null, []],
      filePath: [null, []],
    });

    this.http.get(`http://localhost:8080/api/project/getProjectInfo/63`).subscribe((res: any) => {
      console.log(res)
      this.projectInfo = res.data;

      const split = this.projectInfo.filePath.split('/');
      this.downloadUrl=this.downloadUrl+'?bucketName='+split[3]+'&filePath='+split[4]+'/'+split[5]+'&originalName='+split[5];

    })
  }

  submit(): void {
    this.submitting = true;
    let url = 'http://localhost:8080/api/project/editPro';
    this.http.post(url, this.projectInfo).subscribe(res => {
      // console.log(res)
      this.submitting = false;
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
      console.log(res)
      this.projectInfo.filePath = res.data;
      const split = this.projectInfo.filePath.split('/');
      this.downloadUrl=this.downloadUrl+'?bucketName='+split[3]+'&filePath='+split[4]+'/'+split[5]+'&originalName='+split[5];
    });
  }

  /*download() {
    console.log(this.projectInfo.filePath)
    const split = this.projectInfo.filePath.split('/');
    this.http.get("http://localhost:8080/api/minio/downloadFile",{bucketName:split[3],filePath:split[4]+'/'+split[5],originalName:split[5]}).subscribe((res:any)=>{

    });
  }*/
}
