import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartistChart } from './chartist-chart';

describe('ChartistChart', () => {
  let component: ChartistChart;
  let fixture: ComponentFixture<ChartistChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartistChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartistChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
