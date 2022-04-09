import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-projectdetails-proheader',
  templateUrl: './proheader.component.html',
})
export class ProjectdetailsProheaderComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit(): void { }

}
