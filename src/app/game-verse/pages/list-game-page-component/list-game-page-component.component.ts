import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/list-games.interface';
import { GameVerveService } from '../../services/game-serve.service';
import { PaginatorService } from '../../services/paginator.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-game-page-component',
  templateUrl: './list-game-page-component.component.html',
  styleUrls: ['./list-game-page-component.component.css']
})
export class ListGamePageComponent implements OnInit {

  // Propiedades:
  public listGames!: Result[];
  public currentPage: number = 1

  private currentPageChanged: Subject<number> = new Subject();

  // Inyectamos en el constructor el servicio:
  constructor(
    private gameVerseServicio: GameVerveService,
    private paginatorService: PaginatorService,){}


  ngOnInit(): void {

    this.getGames();

    // Nos subscribimos al Subject para ser notificados cuando la página cambie:
    this.currentPageChanged.subscribe((currentPage) => {
      this.currentPage = currentPage;
      this.getGames();
    });
  }

  /**
   * Este metodo nos permite asignarle a la propiedad listGames
   * la respuesta que nos da el metodo del servicio getlistGames
   * @returns void
   */
  public getGames(): void {

    this.gameVerseServicio.getListGames(9)
    .subscribe({
      next: (respuesta) => {
        this.listGames = respuesta;
        console.log(this.currentPage)
      },
      error: (err) => {
        console.log(`Hay un pequeño: ${err}`)
      }
    })

  }



}




