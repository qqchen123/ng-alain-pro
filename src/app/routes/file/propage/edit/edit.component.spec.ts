import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilePropageEditComponent } from './edit.component';

describe('FilePropageEditComponent', () => {
  let component: FilePropageEditComponent;
  let fixture: ComponentFixture<FilePropageEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePropageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePropageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
