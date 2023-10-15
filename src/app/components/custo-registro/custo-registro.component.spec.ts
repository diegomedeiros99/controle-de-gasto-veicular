import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoRegistroComponent } from './custo-registro.component';

describe('CustoRegistroComponent', () => {
  let component: CustoRegistroComponent;
  let fixture: ComponentFixture<CustoRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustoRegistroComponent]
    });
    fixture = TestBed.createComponent(CustoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
