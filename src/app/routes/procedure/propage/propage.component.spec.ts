import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcedurePropageComponent } from './propage.component';

describe('ProcedurePropageComponent', () => {
  let component: ProcedurePropageComponent;
  let fixture: ComponentFixture<ProcedurePropageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedurePropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedurePropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
