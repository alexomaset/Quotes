import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesDetailsComponent } from './quote-details.component';

describe('QuoteDetailsComponent', () => {
  let component: QuotesDetailsComponent;
  let fixture: ComponentFixture<QuotesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
