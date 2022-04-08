import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CatesPropageComponent } from './propage.component';

describe('CatesPropageComponent', () => {
  let component: CatesPropageComponent;
  let fixture: ComponentFixture<CatesPropageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatesPropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatesPropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
