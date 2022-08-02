import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDetailsEtdComponent } from './pdf-details-etd.component';

describe('PdfDetailsEtdComponent', () => {
  let component: PdfDetailsEtdComponent;
  let fixture: ComponentFixture<PdfDetailsEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfDetailsEtdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfDetailsEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
