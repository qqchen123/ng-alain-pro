import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CatesRoutingModule } from './cates-routing.module';
import { CatesService } from './cates.service';
import { CatesPropageComponent } from './propage/propage.component';
import { CatesPropageService } from './propage/propage.service';
import { CatesPropageEditComponent } from './propage/edit/edit.component';
import { CatesPropageEditService } from './propage/edit/edit.service';
import { CatesPropageViewComponent } from './propage/view/view.component';
import { CatesPropageViewService } from './propage/view/view.service';

const COMPONENTS: Type<void>[] = [
  CatesPropageComponent,
  CatesPropageEditComponent,
  CatesPropageViewComponent];

@NgModule({
  imports: [
    SharedModule,
    CatesRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    CatesService,
    CatesPropageService,
    CatesPropageEditService,
    CatesPropageViewService
  ],
})
export class CatesModule { }
