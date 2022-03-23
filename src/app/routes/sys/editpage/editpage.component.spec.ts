import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysEditpageComponent } from './editpage.component';

describe('SysEditpageComponent', () => {
  let component: SysEditpageComponent;
  let fixture: ComponentFixture<SysEditpageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SysEditpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysEditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
