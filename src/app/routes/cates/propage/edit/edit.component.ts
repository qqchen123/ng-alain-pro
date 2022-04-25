import {Component, OnInit} from '@angular/core';
import {SFSchema, SFTreeSelectWidgetSchema, SFUISchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzUploadFile} from "ng-zorro-antd/upload";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cates-propage-edit',
  templateUrl: './edit.component.html',
})
export class CatesPropageEditComponent implements OnInit {

  form!: FormGroup;
  record: any = {};
  i: any;
  cates: any;
  secCates: any;
  uploading = false;
  fileList: NzUploadFile[] = [];
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private msgSrv: NzMessageService,
    private http: _HttpClient,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.getCateData();
    this.route.queryParams.subscribe((data: any) => {
      if (data.id) {
        this.http.get(`http://localhost:8080/api/cate/cateInfo/` + data.id).subscribe((res: any) => {
          console.log(res)
          this.cates = res.data;
        })
      } else {
        this.cates = {}
      }
    })
    //----------------------------------------------------------
    this.form = this.fb.group({
      parentId: [null, [Validators.required]],
      cateName: [null, []],
      tableInfo: [null, []],
    });

  }

  getCateData() {
    this.http.get(`http://localhost:8080/api/cate/getCatesbyPid/0`).subscribe((res: any) => {
      console.log(res)
      this.secCates = res.data
    });
  }

  close(): void {
  }

  submit(): void {
    this.submitting = true;
    let url;

    if (this.cates.cateId) {
      url = 'http://localhost:8080/api/cate/cateInfoEdit';
    } else {
      url = 'http://localhost:8080/api/cate/cateInfoInsert';
    }
    console.log(this.cates)
    // return;
    this.http.post(url, this.cates).subscribe(res => {
      this.submitting = false;
    });
  }

  goback() {
    window.history.go(-1);
  }
}
