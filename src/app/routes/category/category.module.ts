import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {CategoryRoutingModule} from './category-routing.module';
import {CategoryService} from './category.service';
import {CategoryPropageComponent} from './propage/propage.component';
import {CategoryPropageService} from './propage/propage.service';
import {CategoryPropageEditComponent} from './propage/edit/edit.component';
import {CategoryPropageEditService} from './propage/edit/edit.service';
import {CategoryPropageViewComponent} from './propage/view/view.component';
import {CategoryPropageViewService} from './propage/view/view.service';
import {NzUploadModule} from "ng-zorro-antd/upload";
import { CategoryCateeditComponent } from './cateedit/cateedit.component';
import { CategoryCateeditService } from './cateedit/cateedit.service';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzRadioModule} from "ng-zorro-antd/radio";

const COMPONENTS: Type<void>[] = [
  CategoryPropageComponent,
  CategoryPropageEditComponent,
  CategoryPropageViewComponent,
  CategoryCateeditComponent
];

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutingModule,
    NzUploadModule,
    NzDatePickerModule,
    NzRadioModule
  ],
  declarations: COMPONENTS,
  providers: [
    CategoryService,
    CategoryPropageService,
    CategoryPropageEditService,
    CategoryPropageViewService,
    CategoryCateeditService,
  ],
  exports: [
    CategoryPropageEditComponent,
    CategoryPropageViewComponent,
    CategoryCateeditComponent
  ]
})
export class CategoryModule { }
