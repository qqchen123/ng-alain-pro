import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPropageEditComponent } from './edit.component';

describe('ProjectPropageEditComponent', () => {
  let component: ProjectPropageEditComponent;
  let fixture: ComponentFixture<ProjectPropageEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPropageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPropageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
