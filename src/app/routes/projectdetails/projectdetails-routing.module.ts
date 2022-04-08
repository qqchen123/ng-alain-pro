import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectdetailsPropageComponent} from './propage/propage.component';

const routes: Routes = [
  {path: 'propage', component: ProjectdetailsPropageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectdetailsRoutingModule {
}
