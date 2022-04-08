import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilePropageComponent } from './propage/propage.component';

const routes: Routes = [

  { path: 'propage', component: FilePropageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
