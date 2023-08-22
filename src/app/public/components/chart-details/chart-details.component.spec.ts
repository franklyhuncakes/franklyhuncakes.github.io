import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDetailsComponent } from './chart-details.component';

describe('ChartDetailsComponent', () => {
  let component: ChartDetailsComponent;
  let fixture: ComponentFixture<ChartDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartDetailsComponent]
    });
    fixture = TestBed.createComponent(ChartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
