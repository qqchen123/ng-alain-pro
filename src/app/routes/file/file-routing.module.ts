import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilePropageComponent } from './propage/propage.component';
import {FilePropageViewComponent} from "./propage/view/view.component";

const routes: Routes = [

  { path: 'propage', component: FilePropageComponent },
  { path: 'view', component: FilePropageViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
