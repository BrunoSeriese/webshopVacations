import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVacationComponent } from './delete-vacation.component';

describe('DeleteVacationComponent', () => {
  let component: DeleteVacationComponent;
  let fixture: ComponentFixture<DeleteVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
