import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDepComponent } from './details-dep.component';

describe('DetailsDepComponent', () => {
  let component: DetailsDepComponent;
  let fixture: ComponentFixture<DetailsDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
