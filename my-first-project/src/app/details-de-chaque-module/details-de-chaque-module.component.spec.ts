import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDeChaqueModuleComponent } from './details-de-chaque-module.component';

describe('DetailsDeChaqueModuleComponent', () => {
  let component: DetailsDeChaqueModuleComponent;
  let fixture: ComponentFixture<DetailsDeChaqueModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDeChaqueModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDeChaqueModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
