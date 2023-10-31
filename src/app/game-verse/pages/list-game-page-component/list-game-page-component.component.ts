import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/list-games.interface';
import { GameVerveService } from '../../services/game-serve.service';

@Component({
  selector: 'app-list-game-page-component',
  templateUrl: './list-game-page-component.component.html',
  styleUrls: ['./list-game-page-component.component.css'],
})
export class ListGamePageComponent implements OnInit {
  // Propiedades:
  public listGames: Result[] = [];
  public currentpage: number = 1;
  // Propiedad para controlar el spinner
  public isloading: boolean = true;

  // Inyectamos en el constructor el servicio:
  constructor(private gameVerseServicio: GameVerveService) {}

  ngOnInit(): void {
    // Llamamos al metodo
    this.onPageChanged(this.currentpage);
  }

  /**
   * Este metodo nos permite asignarle a la propiedad listGames
   * la respuesta que nos da el metodo del servicio getlistGames
   * @returns void
   */
  public getGames(page: number): void {
    this.isloading = true;

    this.gameVerseServicio.getListGames(page).subscribe({
      next: (respuesta) => {
        setTimeout(() => {
          this.listGames = respuesta;
          this.isloading = false;
        }, 1500);
      },
      error: (err) => {
        console.log(`Hay un error: ${err}`);
      },
    });
  }

  /**
   * Nos permite sabes cual es el numero de la pagina
   * para asi llamar al metodo que renderiza las cards
   * @param page tipo number
   * @returns void
   */
  public onPageChanged(page: number) {
    this.currentpage = page;

    if (this.currentpage <= 0) return;

    this.getGames(this.currentpage);
  }
}
