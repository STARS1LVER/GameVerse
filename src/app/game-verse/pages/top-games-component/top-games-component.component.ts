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

  constructor(private gameVerseService: GameVerveService) {}

  ngOnInit(): void {
    this.getPerPageTopGames(this.currentPage);
  }

  public topGamesList(page: number) {
    this.gameVerseService.getTopGames(page).subscribe({
      next: (respuesta) => {
        setTimeout(() => {
          this.topGames = respuesta;
        }, 1500);
      },
    });
  }

  public getPerPageTopGames(page: number) {
    this.currentPage = page;

    if (this.currentPage <= 0) return;

    this.topGamesList(this.currentPage);
  }
}
