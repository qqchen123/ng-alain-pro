import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialPropageViewComponent } from './view.component';

describe('MaterialPropageViewComponent', () => {
  let component: MaterialPropageViewComponent;
  let fixture: ComponentFixture<MaterialPropageViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPropageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPropageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
