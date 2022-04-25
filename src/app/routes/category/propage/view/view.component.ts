import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-category-propage-view',
  templateUrl: './view.component.html',
})
export class CategoryPropageViewComponent implements OnInit {
  viewUser: any;
  record: any = {};
  i: any;

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    private http: _HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(`http://localhost:8080/api/project/getProjectInfo/${this.record.id}`).subscribe((res: any) => {
      this.viewUser = res.data;
    })
    // console.log(this.viewUser)
  }

  close(): void {
    this.modal.destroy();
  }
}
