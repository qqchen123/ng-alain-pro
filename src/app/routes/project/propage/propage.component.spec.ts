import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPropageComponent } from './propage.component';

describe('ProjectPropageComponent', () => {
  let component: ProjectPropageComponent;
  let fixture: ComponentFixture<ProjectPropageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
