import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryPropageEditComponent } from './edit.component';

describe('CategoryPropageEditComponent', () => {
  let component: CategoryPropageEditComponent;
  let fixture: ComponentFixture<CategoryPropageEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPropageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPropageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
