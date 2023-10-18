import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/list-games.interface';
import { GameVerveService } from '../../services/game-serve.service';

@Component({
  selector: 'app-top-games-component',
  templateUrl: './top-games-component.component.html',
  styleUrls: ['./top-games-component.component.css'],
})
export class TopGamesComponent implements OnInit {
  // Propiedades
  public topGames!: Result[];
  public isLoading: boolean = false;
  public currentPage: number = 1;

  // Inyectamos en el constructor
  constructor(private gameVerseService: GameVerveService) {}

  ngOnInit(): void {
    // Inicializamos el metodo
    this.getPerPageTopGames(this.currentPage);
  }

  /**
   * Este metodo es para Controlar el spinner y asignarle un valor a
   * la propiedad topGames
   * @param page number
   */
  public topGamesList(page: number): void {
    // Que se muestre el spinner
    this.isLoading = true;
    this.gameVerseService.getTopGames(page).subscribe({
      next: (respuesta) => {
        // Hacemos el timeout para esperar la respuesta
        setTimeout(() => {
          this.topGames = respuesta;
          this.isLoading = false;
        }, 1500);
      },
    });
  }

  /**
   * Este metodo es para controlar la paginacion
   * que previamente nos emiten desde el paginator component
   * @param page number
   * @returns void
   */
  public getPerPageTopGames(page: number): void {
    // Le asignamos la pagina
    this.currentPage = page;

    // si es menor o igual a 0 no hagas nada
    if (this.currentPage <= 0) return;

    // de lo contrario llama al metodo
    this.topGamesList(this.currentPage);
  }
}
