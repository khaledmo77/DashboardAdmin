import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWorld } from './map-world';

describe('MapWorld', () => {
  let component: MapWorld;
  let fixture: ComponentFixture<MapWorld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapWorld]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapWorld);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
