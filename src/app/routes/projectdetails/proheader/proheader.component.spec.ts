import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectdetailsProheaderComponent } from './proheader.component';

describe('ProjectdetailsProheaderComponent', () => {
  let component: ProjectdetailsProheaderComponent;
  let fixture: ComponentFixture<ProjectdetailsProheaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailsProheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailsProheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
