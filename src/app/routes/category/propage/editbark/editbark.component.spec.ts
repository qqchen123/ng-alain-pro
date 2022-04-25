import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryPropageEditbarkComponent } from './editbark.component';

describe('CategoryPropageEditbarkComponent', () => {
  let component: CategoryPropageEditbarkComponent;
  let fixture: ComponentFixture<CategoryPropageEditbarkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPropageEditbarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPropageEditbarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
