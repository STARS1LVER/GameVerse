import { Component, OnInit } from '@angular/core';
import { ResultListPlatform } from '../../interfaces/platform-list-games.interface';
import { GameVerveService } from '../../services/game-serve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-platform-list-games-component',
  templateUrl: './platform-list-games-component.component.html',
  styleUrls: ['./platform-list-games-component.component.css'],
})
export class PlatformListGamesComponent implements OnInit {
  // Propiedades
  public listPlatformGames!: ResultListPlatform[];
  public namePlatform!: string;
  public currentPage: number = 1;
  public isLoading: boolean = false;
  public id!: number;

  // Inyectamos dependencias
  constructor(
    private gameVerseService: GameVerveService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    // Accedemos a los parametros de la ruta
    // Para establecer el id y el name de la plataforma
    this.activatedRoute.params
      // Con el operador tap asignamos los valores
      .pipe(
        tap(({ name }) => (this.namePlatform = name)),
        tap(({ id }) => (this.id = id))
      )
      .subscribe((respuesta) => {
        // nos suscribimos y llamamos al metodo que nos renderiza
        this.getPageByEvent(this.currentPage);
      });
  }

  /**
   * Este metodo nos permite renderizar las card atraves de su parametro page
   * @param page de tipo number
   */
  public getListPlatformById(page: number) {
    this.isLoading = true;
    this.gameVerseService
      .getListGamesForPlatform(this.id, page)
      .subscribe((respuesta) => {
        if (!respuesta) return this.route.navigate(['/gameverse/welcome-page']);
        setTimeout(() => {
          this.listPlatformGames = respuesta;
          this.isLoading = false;
        }, 1500);
        return;
      });
  }

  /**
   * este metodo nos permite para obtener
   * recibir el numero de page que nos emite el componente externo
   * @param page de tipo number
   * @returns puede retornar undefined
   */
  public getPageByEvent(page: number) {
    this.currentPage = page;

    // Validamos que no sea 0 o igual a 0
    if (this.currentPage <= 0) return;

    // si es asi llamamos el metodo que renderiza
    this.getListPlatformById(this.currentPage);
  }
}
