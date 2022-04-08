import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ProjectdetailsRoutingModule } from './projectdetails-routing.module';
import { ProjectdetailsPropageComponent } from './propage/propage.component';
import {MaterialModule} from "../material/material.module";
import {MaterialRoutingModule} from "../material/material-routing.module";
import {MaterialPropageComponent} from "../material/propage/propage.component";

const COMPONENTS: Type<void>[] = [
  ProjectdetailsPropageComponent,

];

@NgModule({
  imports: [
    SharedModule,
    ProjectdetailsRoutingModule,
    MaterialModule,
    MaterialRoutingModule
  ],
  declarations: COMPONENTS,
})
export class ProjectdetailsModule { }
