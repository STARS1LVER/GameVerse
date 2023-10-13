import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../../interfaces/game-info.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GameVerveService } from '../../services/game-serve.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-info-game-component',
  templateUrl: './info-game-component.component.html',
  styleUrls: ['./info-game-component.component.css']
})
export class InfoGameComponent implements OnInit {

  // Propiedades:
  public game!: GameInfo;



  constructor(
    private activatedRoute: ActivatedRoute ,
    private gameVerseServicio: GameVerveService,
    private route: Router
  ){}


  ngOnInit(): void {
   this.activatedRoute.params
   .pipe(
    switchMap(({ id }) => this.gameVerseServicio.getInfoGameById(id))
   )
   .subscribe((respuesta) => {

    if( !respuesta ) return this.route.navigate(['/gameverse/welcome-page'])

    this.game = respuesta;

    return

   })
  }




}
