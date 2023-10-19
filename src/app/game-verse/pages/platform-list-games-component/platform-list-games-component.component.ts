import { Component, OnInit } from '@angular/core';
import { ResultListPlatform } from '../../interfaces/platform-list-games.interface';
import { GameVerveService } from '../../services/game-serve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-platform-list-games-component',
  templateUrl: './platform-list-games-component.component.html',
  styleUrls: ['./platform-list-games-component.component.css'],
})
export class PlatformListGamesComponent implements OnInit {
  // Propiedades
  public listPlatformGames!: ResultListPlatform[];

  constructor(
    private gameVerseService: GameVerveService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.gameVerseService.getListGamesForPlatform(id))
      )
      .subscribe((respuesta) => {
        if (!respuesta) return this.route.navigate(['/gameverse/welcome-page']);

        this.listPlatformGames = respuesta;

        return;
      });
  }
}
