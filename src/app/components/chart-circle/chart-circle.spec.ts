import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCircle } from './chart-circle';

describe('ChartCircle', () => {
  let component: ChartCircle;
  let fixture: ComponentFixture<ChartCircle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCircle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCircle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
