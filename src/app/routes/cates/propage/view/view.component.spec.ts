import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CatesPropageViewComponent } from './view.component';

describe('CatesPropageViewComponent', () => {
  let component: CatesPropageViewComponent;
  let fixture: ComponentFixture<CatesPropageViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatesPropageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatesPropageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
