import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigacoesUra } from './ligacoes-ura';

describe('LigacoesUra', () => {
  let component: LigacoesUra;
  let fixture: ComponentFixture<LigacoesUra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigacoesUra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigacoesUra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
