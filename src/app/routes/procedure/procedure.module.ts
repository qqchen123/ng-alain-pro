import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ProcedureRoutingModule } from './procedure-routing.module';
import { ProcedureService } from './procedure.service';
import { ProcedurePropageComponent } from './propage/propage.component';
import { ProcedurePropageService } from './propage/propage.service';
import { ProcedurePropageEditComponent } from './propage/edit/edit.component';
import { ProcedurePropageEditService } from './propage/edit/edit.service';
import { ProcedurePropageViewComponent } from './propage/view/view.component';
import { ProcedurePropageViewService } from './propage/view/view.service';

const COMPONENTS: Type<void>[] = [
  ProcedurePropageComponent,
  ProcedurePropageEditComponent,
  ProcedurePropageViewComponent];

@NgModule({
  imports: [
    SharedModule,
    ProcedureRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    ProcedureService,
    ProcedurePropageService,
    ProcedurePropageEditService,
    ProcedurePropageViewService
  ],
})
export class ProcedureModule { }
