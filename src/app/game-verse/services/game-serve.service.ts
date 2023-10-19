import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/app/environments/environments';
import { GameVerse, Result } from '../interfaces/list-games.interface';
import { Observable, map } from 'rxjs';
import { GameInfo } from '../interfaces/game-info.interface';
import { Platform, ResultPlatform } from '../interfaces/platform.interface';
import { PlatformList, ResultListPlatform } from '../interfaces/platform-list-games.interface';

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
  public getInfoGameById( id: number ): Observable<GameInfo> {
    return this.httpClient.get<GameInfo>(`${this.baseUrl}games/${id}?key=${this.apiKey}`)
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
  public getListGamesForPlatform(id: number): Observable<ResultListPlatform[]>{
    return this.httpClient.get<PlatformList>(`${this.baseUrl}games?platforms=${id}&key=${this.apiKey}&page=1&page_size=12`)
    .pipe(
      map( respuesta => respuesta.results )
    )
  }











}
