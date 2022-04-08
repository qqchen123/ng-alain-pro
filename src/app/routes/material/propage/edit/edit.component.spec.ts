import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialPropageEditComponent } from './edit.component';

describe('MaterialPropageEditComponent', () => {
  let component: MaterialPropageEditComponent;
  let fixture: ComponentFixture<MaterialPropageEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPropageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPropageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
