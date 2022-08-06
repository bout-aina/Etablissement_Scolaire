import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDepComponent } from './new-dep.component';

describe('NewDepComponent', () => {
  let component: NewDepComponent;
  let fixture: ComponentFixture<NewDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
