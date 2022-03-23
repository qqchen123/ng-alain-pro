import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPropageViewComponent } from './view.component';

describe('ProjectPropageViewComponent', () => {
  let component: ProjectPropageViewComponent;
  let fixture: ComponentFixture<ProjectPropageViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPropageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPropageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
