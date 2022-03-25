import {Component, OnInit} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-project-propage-view',
  templateUrl: './view.component.html',
})
export class ProjectPropageViewComponent implements OnInit {
  viewUser: any;
  record: any = {};
  i: any;

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    private http: _HttpClient
  ) {


  }

  ngOnInit(): void {
    // this.http.get(`http://localhost:8080/api/project/getProjectInfo/${this.record.id}`).subscribe(res => {
    //   console.log(res)
    // });
    this.http.get(`http://localhost:8080/api/project/getProjectInfo/${this.record.id}`).subscribe((res: any) => {
      console.log(res)
      this.viewUser = res.data;

      console.log(this.viewUser)
    })
  }

  close(): void {
    this.modal.destroy();
  }
}
