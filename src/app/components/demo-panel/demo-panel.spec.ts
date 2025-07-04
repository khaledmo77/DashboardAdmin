import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPanel } from './demo-panel';

describe('DemoPanel', () => {
  let component: DemoPanel;
  let fixture: ComponentFixture<DemoPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
