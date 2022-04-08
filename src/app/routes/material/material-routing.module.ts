import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialPropageComponent } from './propage/propage.component';

const routes: Routes = [

  { path: 'propage', component: MaterialPropageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
