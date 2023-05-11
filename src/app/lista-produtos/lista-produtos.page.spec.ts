import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaProdutosPage } from './lista-produtos.page';

describe('ProdutosPage', () => {
  let component: ListaProdutosPage;
  let fixture: ComponentFixture<ListaProdutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
