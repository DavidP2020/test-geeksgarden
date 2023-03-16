import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyspareComponent } from './emptyspare.component';

describe('EmptyspareComponent', () => {
  let component: EmptyspareComponent;
  let fixture: ComponentFixture<EmptyspareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyspareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyspareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
