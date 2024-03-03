import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteMaquinaComponent } from './reporte-maquina.component';

describe('ReporteMaquinaComponent', () => {
  let component: ReporteMaquinaComponent;
  let fixture: ComponentFixture<ReporteMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteMaquinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
