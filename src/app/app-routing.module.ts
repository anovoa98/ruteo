import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarUsuariosComponent } from './buscar-usuarios/buscar-usuarios.component';
import { GitSearchComponent } from './git-search/git-search.component';


const routes: Routes = [
  {path: 'search', redirectTo: '/search/angular', pathMatch: 'full'}, 
  {path: 'search/:query', component: GitSearchComponent, data: {title: 'Page'}},
  {path: 'search/:query/:page', component: GitSearchComponent, data: {title: 'Page'}},
  { path: 'usuarios', redirectTo: '/git-search/pedro', pathMatch: 'full' }, 
  { path: 'usuarios/:query', component: BuscarUsuariosComponent, data: {title: 'Page'}} ,
  { path: 'usuarios/:query/:page', component: BuscarUsuariosComponent, data: {title: 'Page'} },
  { path: '**', component: GitSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }