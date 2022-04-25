import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatesPropageComponent } from './propage/propage.component';
import {CatesPropageEditComponent} from "./propage/edit/edit.component";

const routes: Routes = [

  { path: 'propage', component: CatesPropageComponent },
  { path: 'edit', component: CatesPropageEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatesRoutingModule { }
