import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurryOverlayComponent } from './blurry-overlay.component';

describe('BlurryOverlayComponent', () => {
  let component: BlurryOverlayComponent;
  let fixture: ComponentFixture<BlurryOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlurryOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurryOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
