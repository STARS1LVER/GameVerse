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
  public currentPage: number = 1
  public isloading: boolean = true;



  // Inyectamos en el constructor el servicio:
  constructor(
    private gameVerseServicio: GameVerveService,
    ){}

  ngOnInit(): void {

    this.onPageChanged(this.currentPage)


  }

  /**
   * Este metodo nos permite asignarle a la propiedad listGames
   * la respuesta que nos da el metodo del servicio getlistGames
   * @returns void
   */
  public getGames(page: number): void {

    this.isloading = true

    this.gameVerseServicio.getListGames(page)
    .subscribe({
      next: (respuesta) => {
        setTimeout(() => {
          this.isloading = false
          this.listGames = respuesta;

        },3000);
      },
      error: (err) => {
        console.log(`Hay un pequeño: ${err}`)
      }
    })

  }

  public onPageChanged(page: number){

    this.currentPage = page

    if(this.currentPage <= 0 ) return

    this.getGames(this.currentPage)


  }



}




