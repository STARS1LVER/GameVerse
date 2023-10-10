import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/list-games.interface';
import { GameVerveService } from '../../services/game-serve.service';

@Component({
  selector: 'app-list-game-page-component',
  templateUrl: './list-game-page-component.component.html',
  styleUrls: ['./list-game-page-component.component.css']
})
export class ListGamePageComponent implements OnInit {

  // Propiedades:
  public listGames!: Result[];

  // Inyectamos en el constructor el servicio:
  constructor( private gameVerseServicio: GameVerveService){}


  ngOnInit(): void {
    this.getGames()
  }

  /**
   * Este metodo nos permite asignarle a la propiedad listGames
   * la respuesta que nos da el metodo del servicio getlistGames
   * @returns void
   */
  public getGames(): void {
    this.gameVerseServicio.getListGames()
    .subscribe({
      next:(respuesta) => {
        this.listGames = respuesta;
      },
      error: (err) => {
        console.log(`Hay un error: ${err}`)
      }
    })
  }




}
