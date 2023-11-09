import { Component, OnInit } from '@angular/core';
import { ResultListPlatform } from '../../interfaces/platform-list-games.interface';
import { GameVerveService } from '../../services/game-serve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-genres-list-games-component',
  templateUrl: './genres-list-games-component.component.html',
  styleUrls: ['./genres-list-games-component.component.css'],
})
export class GenresListGamesComponent implements OnInit {
  // propiedades:
  public listGamesForGenres!: ResultListPlatform[];
  public nameGenres!: string;
  public isLoading: boolean = false;
  public id!: number;
  public currentPage: number = 1;

  // Inyectamos las dependencias
  constructor(
    private gameVerseService: GameVerveService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtenemos los parametros de la ruta en este caso el id y el name
    this.activatedRoute.params.pipe(
      tap(({ name }) => (this.nameGenres = name)),
      tap(({ id }) => (this.id = id))
    )
    .subscribe({
      next: (respuesta) => {
        this.getListGamesforGenresById( this.currentPage )
      }
    })
  }

  public getListGamesforGenresById(page: number) {
    this.isLoading = true
    this.gameVerseService.getListGamesGenresForById(this.id,page)
    .subscribe({
      next: (respuesta) => {
        if (!respuesta) return this.router.navigate(['/gameverse/welcome-page']);

        setTimeout(()=>{
          this.listGamesForGenres = respuesta;
          this.isLoading = false;
        },1500)
        return;
      },
      error: () => {
        console.log('hay un error');
      },
    });
  }


  public getPageByEmitEvent( page: number ){

    this.currentPage = page;

    if( this.currentPage <= 0 ) return;

    this.getListGamesforGenresById( page )


  }


}
