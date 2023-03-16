import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsMaintenanceComponent } from './assets-maintenance.component';

describe('AssetsMaintenanceComponent', () => {
  let component: AssetsMaintenanceComponent;
  let fixture: ComponentFixture<AssetsMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
