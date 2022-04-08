import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcedurePropageEditComponent } from './edit.component';

describe('ProcedurePropageEditComponent', () => {
  let component: ProcedurePropageEditComponent;
  let fixture: ComponentFixture<ProcedurePropageEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedurePropageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedurePropageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
