import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadUploadComponent } from './upload/upload.component';

const routes: Routes = [

  { path: 'upload', component: FileuploadUploadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileuploadRoutingModule { }
