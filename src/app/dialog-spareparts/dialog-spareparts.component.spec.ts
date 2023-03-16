import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSparepartsComponent } from './dialog-spareparts.component';

describe('DialogSparepartsComponent', () => {
  let component: DialogSparepartsComponent;
  let fixture: ComponentFixture<DialogSparepartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSparepartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSparepartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
