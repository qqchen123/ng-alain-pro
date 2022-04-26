import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialPropageComponent } from './propage/propage.component';
import {MaterialPropageEditComponent} from "./propage/edit/edit.component";

const routes: Routes = [

  { path: 'propage', component: MaterialPropageComponent },
  { path: 'edit', component: MaterialPropageEditComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
