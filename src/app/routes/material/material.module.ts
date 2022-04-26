import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {MaterialRoutingModule} from './material-routing.module';
import {MaterialService} from './material.service';
import {MaterialPropageComponent} from './propage/propage.component';
import {MaterialPropageService} from './propage/propage.service';
import {MaterialPropageEditComponent} from './propage/edit/edit.component';
import {MaterialPropageEditService} from './propage/edit/edit.service';
import {MaterialPropageViewComponent} from './propage/view/view.component';
import {MaterialPropageViewService} from './propage/view/view.service';
import {NzUploadModule} from "ng-zorro-antd/upload";

const COMPONENTS: Type<void>[] = [
  MaterialPropageComponent,
  MaterialPropageEditComponent,
  MaterialPropageViewComponent
];

@NgModule({
    imports: [
        SharedModule,
        MaterialRoutingModule,
        NzUploadModule
    ],
  declarations: COMPONENTS,
  providers: [
    MaterialService,
    MaterialPropageService,
    MaterialPropageEditService,
    MaterialPropageViewService
  ],
  exports: [
    MaterialPropageComponent
  ]
})
export class MaterialModule {
}
