import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Categoria } from '../../model/categoria';
import { API_CONFIG } from '../../config/api.config';


@Injectable()
export class CategoriaServerProvider {

  constructor(public http: HttpClient) {
    
  }

  buscarTodos() : Observable < Categoria[] >{
    return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/categorias`)   
   }

}
