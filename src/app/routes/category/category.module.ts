import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryService } from './category.service';
import { CategoryPropageComponent } from './propage/propage.component';
import { CategoryPropageService } from './propage/propage.service';
import { CategoryPropageEditComponent } from './propage/edit/edit.component';
import { CategoryPropageEditService } from './propage/edit/edit.service';
import { CategoryPropageViewComponent } from './propage/view/view.component';
import { CategoryPropageViewService } from './propage/view/view.service';

const COMPONENTS: Type<void>[] = [
  CategoryPropageComponent,
  CategoryPropageEditComponent,
  CategoryPropageViewComponent];

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    CategoryService,
    CategoryPropageService,
    CategoryPropageEditService,
    CategoryPropageViewService
  ],
})
export class CategoryModule { }
