import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { BuscarUsuariosComponent } from './buscar-usuarios/buscar-usuarios.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;
  title: string;
  page:string;

  constructor(private GitSearchService: GitSearchService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      if(params.get('page'))
        this.page = params.get('page');
      else
        this.page = "0";
      this.gitSearch();
    })
    this.route.data.subscribe((result) => {
      this.title = result.title
    });

  }

gitSearch =()=>{
  this.GitSearchService.gitSearch(this.searchQuery, this.page).then((response)=>{
    this.searchResults = response;
    this.displayQuery= this.searchQuery;
    //alert('Total repositories found: '+response.total_count);
  },(error) => {
    //alert('Error: '+ error.statusText);
    this.searchResults="";
    this.displayQuery="error";
    
  })
  

}

}