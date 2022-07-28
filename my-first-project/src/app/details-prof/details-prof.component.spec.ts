import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProfComponent } from './details-prof.component';

describe('DetailsProfComponent', () => {
  let component: DetailsProfComponent;
  let fixture: ComponentFixture<DetailsProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
