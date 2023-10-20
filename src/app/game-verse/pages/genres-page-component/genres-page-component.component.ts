import { Component, OnInit } from '@angular/core';
import { ResultGenres } from '../../interfaces/genres.interface';
import { GameVerveService } from '../../services/game-serve.service';

@Component({
  selector: 'app-genres-page-component',
  templateUrl: './genres-page-component.component.html',
  styleUrls: ['./genres-page-component.component.css'],
})
export class GenresPageComponent implements OnInit {
  // Propiedades:
  public listGenresOpcion!: ResultGenres[];
  public isLoading: boolean = false;
  public opcionCard: string = 'genres-list';

  // Inyectamos en el constructor
  constructor(private gameVerseService: GameVerveService) {}

  ngOnInit(): void {
    this.getListOpcionsGenres();
  }

  /**
   * este metodos nos permite obtener y asignarle
   * valor a la propiedad platformList
   * @returns void
   */
  public getListOpcionsGenres(): void {

    // le asignamos el valor true para que se muestre
    this.isLoading = true;

    this.gameVerseService.getListGenres().subscribe({
      next: (respuesta) => {

        // Usamos el timeOut para mostrar ciertos segundos el spinner
        setTimeout(() => {
          this.listGenresOpcion = respuesta;
          this.isLoading = false
        }, 1550);
      },
      error: () => {
        console.log('Hay un error!');
      },
    });
  }
}
