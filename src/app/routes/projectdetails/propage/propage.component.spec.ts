import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectdetailsPropageComponent } from './propage.component';

describe('ProjectdetailsPropageComponent', () => {
  let component: ProjectdetailsPropageComponent;
  let fixture: ComponentFixture<ProjectdetailsPropageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailsPropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailsPropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
