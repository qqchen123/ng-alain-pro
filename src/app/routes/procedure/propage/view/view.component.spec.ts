import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcedurePropageViewComponent } from './view.component';

describe('ProcedurePropageViewComponent', () => {
  let component: ProcedurePropageViewComponent;
  let fixture: ComponentFixture<ProcedurePropageViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedurePropageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedurePropageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
