import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';
import { SysService } from './sys.service';
import { SysListComponent } from './list/list.component';
import { SysList2Component } from './list2/list2.component';
import { SysList3Component } from './list3/list3.component';
import { SysEditComponent } from './edit/edit.component';
import { SysEditService } from './edit/edit.service';
import { SysViewComponent } from './view/view.component';
import { SysViewService } from './view/view.service';
import { SysEditpageComponent } from './editpage/editpage.component';
import { SysEditpageService } from './editpage/editpage.service';
import {FooterToolbarModule} from "@delon/abc/footer-toolbar";

const COMPONENTS: Type<void>[] = [
  SysListComponent,
  SysList2Component,
  SysList3Component,
  SysEditComponent,
  SysViewComponent,
  SysEditpageComponent];

@NgModule({
  imports: [
    SharedModule,
    SysRoutingModule,
    FooterToolbarModule
  ],
  declarations: COMPONENTS,
  providers: [
    SysService,
    SysEditService,
    SysViewService,
    SysEditpageService
  ],
})
export class SysModule { }
