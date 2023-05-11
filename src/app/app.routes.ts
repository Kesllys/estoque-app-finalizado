import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'lista-produtos',
    pathMatch: 'full',
  },
  {
    path: 'lista-produtos',
    loadComponent: () => import('./lista-produtos/lista-produtos.page').then( m => m.ListaProdutosPage)
  },
  {
    path: 'create-cliente',
    loadComponent: () => import('./create/create-cliente/create-cliente.page').then( m => m.CreateClientePage)
  },
  {
    path: 'alterar-cliente/:id',
    loadComponent: () => import('./alterar-cliente/alterar-cliente.page').then( m => m.AlterarClientePage)
  },
  {
    path: 'create-produto',
    loadComponent: () => import('./create/create-produto/create-produto.page').then( m => m.CreateProdutoPage)
  },
  {
    path: 'alterar-produto/:id',
    loadComponent: () => import('./alterar-produto/alterar-produto.page').then( m => m.AlterarProdutoPage)
  },




];
