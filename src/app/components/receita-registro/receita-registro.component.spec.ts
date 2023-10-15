import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaRegistroComponent } from './receita-registro.component';

describe('ReceitaRegistroComponent', () => {
  let component: ReceitaRegistroComponent;
  let fixture: ComponentFixture<ReceitaRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitaRegistroComponent]
    });
    fixture = TestBed.createComponent(ReceitaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
