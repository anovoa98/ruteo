import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarUsuariosComponent } from './buscar-usuarios/buscar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    BuscarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
