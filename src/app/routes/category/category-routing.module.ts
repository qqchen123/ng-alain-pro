import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPropageComponent } from './propage/propage.component';
import {CategoryCateeditComponent} from "./cateedit/cateedit.component";

const routes: Routes = [
  { path: 'propage', component: CategoryPropageComponent },
  { path: 'edit', component: CategoryCateeditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
