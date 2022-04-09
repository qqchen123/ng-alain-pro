import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {ProjectdetailsRoutingModule} from './projectdetails-routing.module';
import {ProjectdetailsPropageComponent} from './propage/propage.component';
import {MaterialModule} from "../material/material.module";
import {ProjectdetailsProheaderComponent} from './proheader/proheader.component';
import {ProjectdetailsProheaderService} from './proheader/proheader.service';
import {NzDividerModule} from "ng-zorro-antd/divider";

const COMPONENTS: Type<void>[] = [
  ProjectdetailsPropageComponent,
  ProjectdetailsProheaderComponent
];

@NgModule({
  imports: [
    SharedModule,
    ProjectdetailsRoutingModule,
    MaterialModule,
    NzDividerModule,
  ],
  declarations: COMPONENTS,
  providers: [
    ProjectdetailsProheaderService
  ],
})
export class ProjectdetailsModule {
}
