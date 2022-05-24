import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { FileuploadRoutingModule } from './fileupload-routing.module';
import { FileuploadUploadComponent } from './upload/upload.component';

const COMPONENTS: Type<void>[] = [
  FileuploadUploadComponent];

@NgModule({
    imports: [
        SharedModule,
        FileuploadRoutingModule
    ],
    declarations: COMPONENTS,
    exports: [
        FileuploadUploadComponent
    ]
})
export class FileuploadModule { }
