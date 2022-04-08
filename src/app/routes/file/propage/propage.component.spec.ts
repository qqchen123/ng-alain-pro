import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilePropageComponent } from './propage.component';

describe('FilePropageComponent', () => {
  let component: FilePropageComponent;
  let fixture: ComponentFixture<FilePropageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
