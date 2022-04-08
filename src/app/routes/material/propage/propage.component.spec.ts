import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialPropageComponent } from './propage.component';

describe('MaterialPropageComponent', () => {
  let component: MaterialPropageComponent;
  let fixture: ComponentFixture<MaterialPropageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
