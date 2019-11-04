import { Component, OnInit } from '@angular/core';
import { UsuariosInterfaz } from '../usuarios-interfaz';
import { GitSearchService } from '../git-search.service.ts';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-buscar-usuarios',
  templateUrl: './buscar-usuarios.component.html',
  styleUrls: ['./buscar-usuarios.component.css']
})
export class BuscarUsuariosComponent implements OnInit {

  searchUsuarios: UsuariosInterfaz;
  searchQueryUsuarios: string;
  displayUsuarios: string;
  title: string;
  page:string;
  

  constructor(private GitSearchService: GitSearchService,private route: ActivatedRoute,private router: Router) {
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQueryUsuarios = params.get('query');
      this.displayUsuarios = params.get('query');
      if(params.get('page'))
        this.page = params.get('page');
      else
        this.page = "0";
      this.buscarUsuarios();
    })
    this.route.data.subscribe((result) => {
      this.title = result.title
    });

  }

  buscarUsuarios =()=>{
    this.GitSearchService.usuarios(this.searchQueryUsuarios, this.page).then((response)=>{
      this.searchUsuarios = response;
      this.displayUsuarios= this.searchQueryUsuarios;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
    
  
  }

}