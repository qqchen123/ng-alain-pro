import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";
import {NzMessageService} from "ng-zorro-antd/message";
import {HttpClient, HttpRequest, HttpResponse} from "@angular/common/http";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-category-propage-editbark',
  templateUrl: './editbark.component.html',
  styleUrls: ['./editbark.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryPropageEditbarkComponent implements OnInit {

  constructor(
    public http: _HttpClient,
    private msg: NzMessageService
  ) {
  }

  public uploading = false;
  public fileList: NzUploadFile[] = [];
  public projectInfo: any={};

  ngOnInit(): void {
    this.http.get(`http://localhost:8080/api/project/getProjectInfo/63`).subscribe((res: any) => {
      this.projectInfo = res.data;
      console.log(this.projectInfo)
    })
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    let fileList = [file];
    fileList = fileList.slice(-2);
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
    this.http.post('http://localhost:8080/api/minio/upload', formData).subscribe((res: any) => {
      console.log(res)
      this.projectInfo.filePath = res.data
    });
    console.log(this.projectInfo)
  }


  save() {
    console.log(this.projectInfo)

  }
}
