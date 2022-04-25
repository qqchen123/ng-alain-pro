import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectdetailsPropageComponent} from './propage/propage.component';
import {ProjectdetailsProheaderComponent} from './proheader/proheader.component';

const routes: Routes = [
  {path: 'propage', component: ProjectdetailsPropageComponent},
  {path: 'proheader', component: ProjectdetailsProheaderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectdetailsRoutingModule {

}
