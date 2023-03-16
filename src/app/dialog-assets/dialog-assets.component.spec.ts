import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAssetsComponent } from './dialog-assets.component';

describe('DialogAssetsComponent', () => {
  let component: DialogAssetsComponent;
  let fixture: ComponentFixture<DialogAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
