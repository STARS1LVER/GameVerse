import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/list-games.interface';

@Component({
  selector: 'card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {

  // Creamos un input donde recibiremos la informacion desde el padre
  @Input()
  gameList!: Result

  ngOnInit(): void {
    // Si no existe la propiedad arrojame un error
    if( !this.gameList )throw new Error('Property GameList is requireed.');
  }


}
