import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysListComponent } from './list/list.component';
import { SysList2Component } from './list2/list2.component';
import { SysList3Component } from './list3/list3.component';
import {SysViewComponent} from "./view/view.component";
import { SysEditpageComponent } from './editpage/editpage.component';

const routes: Routes = [

  { path: 'list', component: SysListComponent },
  { path: 'list2', component: SysList2Component },
  { path: 'list3', component: SysList3Component },
  { path: 'view', component: SysViewComponent },
  { path: 'editpage', component: SysEditpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule { }
