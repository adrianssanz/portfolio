import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolverArribaComponent } from './volver-arriba.component';

describe('VolverArribaComponent', () => {
  let component: VolverArribaComponent;
  let fixture: ComponentFixture<VolverArribaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolverArribaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolverArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
