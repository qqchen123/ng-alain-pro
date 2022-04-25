import {Component, Input, OnInit} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import {ActivatedRoute} from "@angular/router";
import {SFSchema, SFUploadWidgetSchema} from "@delon/form";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-projectdetails-propage',
  templateUrl: './propage.component.html',
})
export class ProjectdetailsPropageComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() projectId: any;
  @Input() cateId: any;


  cates: any;

  constructor(private http: _HttpClient, public activateRoute: ActivatedRoute, private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((data: any) => {
      this.projectId = data.projectId;
    })
    console.log(this.cateId)
    this.getcateList();
  }

  getcateList() {
    this.http.get(`http://localhost:8080/api/cate/getCatesbyPid/${this.cateId}`).subscribe((res: any) => {
      this.cates = res.data;
    })
  }

}
