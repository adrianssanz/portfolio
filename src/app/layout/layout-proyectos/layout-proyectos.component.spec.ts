import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProyectosComponent } from './layout-proyectos.component';

describe('LayoutProyectosComponent', () => {
  let component: LayoutProyectosComponent;
  let fixture: ComponentFixture<LayoutProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
