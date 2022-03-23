import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysList2Component } from './list2.component';

describe('SysList2Component', () => {
  let component: SysList2Component;
  let fixture: ComponentFixture<SysList2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SysList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
