import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysListComponent } from './list.component';

describe('SysListComponent', () => {
  let component: SysListComponent;
  let fixture: ComponentFixture<SysListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
