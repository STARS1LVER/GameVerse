import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/app/environments/environments';
import { GameVerse, Result } from '../interfaces/list-games.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { GameInfo } from '../interfaces/game-info.interface';
import { Platform, ResultPlatform } from '../interfaces/platform.interface';
import { PlatformList, ResultListPlatform } from '../interfaces/platform-list-games.interface';
import { Genres, ResultGenres } from '../interfaces/genres.interface';

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
  public getListGames(page: number): Observable<Result[]> {
    return this.httpClient.get<GameVerse>(`${this.baseUrl}games?key=${this.apiKey}&page=${page}&page_size=12`)
    // Nos permite transformar la respuesta:
    .pipe(
      map( respuesta => respuesta.results   )
    )
  }

  /**
   * Obtenemos la informacion del juego por el  id
   * @param id tipo number
   * @returns retorna un Observable<Emite GameInfo >
   */
  public getInfoGameById( id: number ): Observable<GameInfo | undefined >  {
    return this.httpClient.get<GameInfo>(`${this.baseUrl}games/${id}?key=${this.apiKey}`)
    .pipe(
      catchError( (error) => {
        if( error.status === 404){
          console.log('recurso no encontrado');
          return of (undefined);
        } else {
          return of (undefined)
        }
      })
    )
  }

  /**
   * Metodo para traer los mejores juegos del año
   * @returns un obersvable que emite un arreglo de Result
   */
  public getTopGames(page: number): Observable<Result[]>{
    return this.httpClient.get<GameVerse>(`${this.baseUrl}games?dates=2022-01-01,2024-04-01&ordering=-added&key=${this.apiKey}&page=${page}&page_size=12`)
    .pipe(
      map( respuesta => respuesta.results )
    )
  }

  /**
   * Este metodo nos permite traer las plataformas
   * @returns Observable<Emite un arreglos de tipo ResultPlatform>
   */
  public getListPlatform(): Observable<ResultPlatform[]>{
    return this.httpClient.get<Platform>(`${this.baseUrl}platforms?key=${this.apiKey}`)
    .pipe(
      map( respuesta => respuesta.results.slice(0,20) )
    )
  }


  /**
   * Obtenemos la lista de juegos por plataforma por medio del id
   * @param id number
   * @returns observable< Emite un arreglo de tipo ResultListPlatform >
   */
  public getListGamesForPlatform(id: number, page: number): Observable<ResultListPlatform[]>{
    return this.httpClient.get<PlatformList>(`${this.baseUrl}games?platforms=${id}&key=${this.apiKey}&page=${page}&page_size=12`)
    .pipe(
      map( respuesta => respuesta.results )
    )
  }


  /**
   * Este metodo nos trae la lista de opciones de generos
   * @returns un obsevable que emite un arreglo de resultGenres
   */
  public getListGenres() : Observable<ResultGenres[]> {
    return this.httpClient.get<Genres>(`${this.baseUrl}genres?key=${this.apiKey}`)
    .pipe(
      map( respuesta => respuesta.results.slice(0,16) )
    )
  }

  /**
   * Este metodo nos permite obtener la lista de juegos dependiendo el genero donde estemos
   * @param id number
   * @param page number
   * @returns observable que emite un arreglo de tipo ResultListPlatform
   */
  public getListGamesGenresForById( id: number, page: number ): Observable<ResultListPlatform[]>  {
    return this.httpClient.get<PlatformList>(`${this.baseUrl}games?genres=${id}&key=${this.apiKey}&page=${page}&page_size=12`)
    .pipe(
      map( respuesta => respuesta.results )
    )
  }

  /**
   * Este metodo nos permite buscar juegos por medio del nombre que le pasemos
   * @param name string
   * @returns un observable que emite un arreglo de tipo Result
   */
  public getListGamesBySearch( name:string, page: number ): Observable<GameVerse> {
    return this.httpClient.get<GameVerse>(`${this.baseUrl}games?search=${name}&key=${this.apiKey}&page=${page}&page_size=12`)

  }








}
