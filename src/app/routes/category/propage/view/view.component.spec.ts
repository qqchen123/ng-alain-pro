import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryPropageViewComponent } from './view.component';

describe('CategoryPropageViewComponent', () => {
  let component: CategoryPropageViewComponent;
  let fixture: ComponentFixture<CategoryPropageViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPropageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPropageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
