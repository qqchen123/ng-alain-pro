import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectService} from './project.service';
import {ProjectPropageComponent} from './propage/propage.component';
import {ProjectPropageService} from './propage/propage.service';
import {ProjectPropageEditComponent} from './propage/edit/edit.component';
import {ProjectPropageEditService} from './propage/edit/edit.service';
import {ProjectPropageViewComponent} from './propage/view/view.component';
import {ProjectPropageViewService} from './propage/view/view.service';

const COMPONENTS: Type<void>[] = [
  ProjectPropageComponent,
  ProjectPropageEditComponent,
  ProjectPropageViewComponent
];

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    ProjectService,
    ProjectPropageService,
    ProjectPropageEditService,
    ProjectPropageViewService
  ],
})
export class ProjectModule {
}
