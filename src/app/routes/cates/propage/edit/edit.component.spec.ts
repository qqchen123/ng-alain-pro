import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CatesPropageEditComponent } from './edit.component';

describe('CatesPropageEditComponent', () => {
  let component: CatesPropageEditComponent;
  let fixture: ComponentFixture<CatesPropageEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatesPropageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatesPropageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
