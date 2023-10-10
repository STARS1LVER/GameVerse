import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/app/environments/environments';
import { GameVerse, Result } from '../interfaces/list-games.interface';
import { Observable, map } from 'rxjs';

@Injectable({providedIn: 'root'})


export class GameVerveService {


  // Propiedades:
  private baseUrl: string  = environments.baseUrl;
  private apiKey: string = environments.apiKey;

  // Inyectamos el httpClient para poder hacer las peticiones
  constructor( private httpClient: HttpClient ){}


  /**
   *  Este metodo nos permite obtener la lista de videojuegos
   *  Usamos el operador map para transformar la respuesta y solo nos arroje un arreglo de Result
   * @returns Observable<Result[]>
   */
  public getListGames(): Observable<Result[]> {
    return this.httpClient.get<GameVerse>(`${this.baseUrl}games?key=${this.apiKey}&page=1&page_size=12`)
    // Nos permite transformar la respuesta:
    .pipe(
      map( respuesta => respuesta.results   )
    )
  }









}
