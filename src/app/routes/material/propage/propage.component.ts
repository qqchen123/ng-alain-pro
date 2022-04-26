import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STData, STPage, STReq, STRes} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {MaterialPropageEditComponent} from "./edit/edit.component";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzTableQueryParams} from "ng-zorro-antd/table";

@Component({
  selector: 'app-material-propage',
  templateUrl: './propage.component.html',
  styles: [
    `
      .search-box {
        padding: 8px;
      }

      .search-box input {
        width: 188px;
        margin-bottom: 8px;
        display: block;
      }

      .search-box button {
        width: 90px;
      }

      .search-button {
        margin-right: 8px;
      }
    `
  ]
})
export class MaterialPropageComponent implements OnInit {

  @Input()
  cateId: any;

  @Input()
  projectId: any;

  total = 1;
  listOfRandomUser: any[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  fileDataUrl='http://localhost:8080/api/material/materialList';
  visible=false;
  searchValue = '';

  constructor(private http: _HttpClient) {
  }

  ngOnInit(): void {
    this.getFileData()
  }

  getFileData() {
    this.http.get(
      this.fileDataUrl,
      {pageNum:this.pageIndex,pageSize:this.pageSize,cateId:this.cateId,projectId:this.projectId}
    ).subscribe((res:any)=>{
      this.loading=false;
      this.listOfRandomUser = res.data.list;
      this.total = res.data.total;
    });
  }

  add() {

  }

  onQueryParamsChange($event: NzTableQueryParams) {

  }

  delete(id:any) {
    // this.http.delete('').subscribe((res:any)=>{
    // });

  }

  search() {
    this.visible = false;
    this.listOfRandomUser = this.listOfRandomUser.filter((item: any) => {
      return item.fileName.indexOf(this.searchValue) !== -1
    });
  }

  reset() {
    this.searchValue = '';
    this.search();
  }
}
