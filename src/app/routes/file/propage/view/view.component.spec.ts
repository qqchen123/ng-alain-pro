import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilePropageViewComponent } from './view.component';

describe('FilePropageViewComponent', () => {
  let component: FilePropageViewComponent;
  let fixture: ComponentFixture<FilePropageViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePropageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePropageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
