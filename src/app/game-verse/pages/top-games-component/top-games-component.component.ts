import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/list-games.interface';
import { GameVerveService } from '../../services/game-serve.service';

@Component({
  selector: 'app-top-games-component',
  templateUrl: './top-games-component.component.html',
  styleUrls: ['./top-games-component.component.css']
})
export class TopGamesComponent implements OnInit {
  // Propiedades
  public topGames!: Result[];

  constructor(
    private gameVerseService: GameVerveService
  ){}

  ngOnInit(): void {
    this.topGamesList()
  }


  public topGamesList(){
    this.gameVerseService.getTopGames()
    .subscribe({
      next:(respuesta) =>{
        this.topGames = respuesta
      }
    })
  }


}
