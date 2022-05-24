import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileuploadUploadComponent } from './upload.component';

describe('FileuploadUploadComponent', () => {
  let component: FileuploadUploadComponent;
  let fixture: ComponentFixture<FileuploadUploadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuploadUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
