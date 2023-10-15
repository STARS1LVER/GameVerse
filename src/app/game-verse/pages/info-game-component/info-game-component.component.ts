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


  // Inyectamos en el constructor
  constructor(
    private activatedRoute: ActivatedRoute ,
    private gameVerseServicio: GameVerveService,
    private route: Router
  ){}

  // usamos los ciclos de vida de del componenente para acceder a los parametros de la ruta
  ngOnInit(): void {
   this.activatedRoute.params
  //  Usamos el pipe y accedemos al operador de rxjs y usamos al swicthmap
  // Para acceder al id que trae la ruta
   .pipe(
    switchMap(({ id }) => this.gameVerseServicio.getInfoGameById(id))
   )
   .subscribe((respuesta) => {
    // Si no existe el id llevame a la pagina principal
    if( !respuesta ) return this.route.navigate(['/gameverse/welcome-page'])

    this.game = respuesta;

    return

   })
  }




}
