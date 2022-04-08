import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { FileRoutingModule } from './file-routing.module';
import { FileService } from './file.service';
import { FilePropageComponent } from './propage/propage.component';
import { FilePropageService } from './propage/propage.service';
import { FilePropageEditComponent } from './propage/edit/edit.component';
import { FilePropageEditService } from './propage/edit/edit.service';
import { FilePropageViewComponent } from './propage/view/view.component';
import { FilePropageViewService } from './propage/view/view.service';

const COMPONENTS: Type<void>[] = [
  FilePropageComponent,
  FilePropageEditComponent,
  FilePropageViewComponent];

@NgModule({
  imports: [
    SharedModule,
    FileRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    FileService,
    FilePropageService,
    FilePropageEditService,
    FilePropageViewService
  ],
})
export class FileModule { }
