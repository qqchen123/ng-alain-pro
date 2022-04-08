import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcedurePropageComponent } from './propage/propage.component';

const routes: Routes = [

  { path: 'propage', component: ProcedurePropageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureRoutingModule { }
