import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveAssetsComponent } from './inactive-assets.component';

describe('InactiveAssetsComponent', () => {
  let component: InactiveAssetsComponent;
  let fixture: ComponentFixture<InactiveAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
