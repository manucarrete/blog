import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
     
import {  Observable, catchError, map, of } from 'rxjs';
import { Post } from './post';
  
// Importar aquí las interfaces necesarias
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private apiURL = "https://jsonplaceholder.typicode.com";
    
// Http Header Options
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
 // Constructor

  constructor(private httpClient: HttpClient) { }
    
  // Metodos
    
 // GET
 getAll(): Observable<any> {
  return this.httpClient.get(this.apiURL + '/posts/')
  .pipe(
    catchError(() => of(null))
  )

} // usar adecuadamente las interfaces

// PAGINACION

getPaginatedPosts(page: number, pageSize: number): Observable<any> {
  // Configura los parámetros de la solicitud HTTP
  let params = new HttpParams();
  params = params.append('page', page.toString());
  params = params.append('pageSize', pageSize.toString());

  return this.httpClient.get(`${this.apiURL}/posts/`, { params: params })
    .pipe(
      catchError(() => of(null))
    );
}
    
// CREATE
    
  create(post:Post): Observable<any> {
    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
  }  
    
// BUSCAR
    
  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/' + id)
  }
    
// ACTUALIZAR
    
  update(id:number, post:Post): Observable<any> {
    return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
  }
       
// BORRAR
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions)
  }
      
}