import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryCateeditComponent } from './cateedit.component';

describe('CategoryCateeditComponent', () => {
  let component: CategoryCateeditComponent;
  let fixture: ComponentFixture<CategoryCateeditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCateeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
