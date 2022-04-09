import {Component, OnInit} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-projectdetails-propage',
  templateUrl: './propage.component.html',
})
export class ProjectdetailsPropageComponent implements OnInit {

  cates: any;

  projectId:any;


  constructor(private http: _HttpClient,public activateRoute: ActivatedRoute) {
    this.http.get(`http://localhost:8080/api/cate/getCatesbyPid/1`).subscribe((res: any) => {
      this.cates = res.data;
      console.log(this.cates)
    })
  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((data:any)=>{
      this.projectId=data.projectId;
    })
  }

}
