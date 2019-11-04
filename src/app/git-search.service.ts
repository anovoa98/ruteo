import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { UsuariosInterfaz } from './usuarios-interfaz';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];
  constructor(private http: HttpClient) { }

  gitSearch = (query:string, page:string):Promise<GitSearch> => {
    let promise = new Promise<GitSearch>((resolve,reject)=>{
      if(this.cachedValues[query]){
        resolve(this.cachedValues[query]);
      }else{
        this.http.get('https://api.github.com/search/repositories?q='+query+';page='+page).toPromise().then((response)=>{
          resolve(response as GitSearch)
        },(error)=>{
          reject(error);
        })
      }
    })
    return promise
  }

  usuarios = (query:string, page:string):Promise<UsuariosInterfaz> => {
    let promise = new Promise<UsuariosInterfaz>((resolve,reject)=>{
      if(this.cachedValues[query]){
        resolve(this.cachedValues[query]);
      }else{
        this.http.get('https://api.github.com/search/users?q='+query+';page='+page).toPromise().then((response)=>{
          resolve(response as UsuariosInterfaz)
        },(error)=>{
          reject(error);
        })
      }
    })
    return promise
  }


}