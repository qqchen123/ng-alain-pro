import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysList3Component } from './list3.component';

describe('SysList3Component', () => {
  let component: SysList3Component;
  let fixture: ComponentFixture<SysList3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SysList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
