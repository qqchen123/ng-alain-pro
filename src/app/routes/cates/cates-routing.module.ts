import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatesPropageComponent } from './propage/propage.component';

const routes: Routes = [

  { path: 'propage', component: CatesPropageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatesRoutingModule { }
