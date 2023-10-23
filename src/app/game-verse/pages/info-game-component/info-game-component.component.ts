import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../../interfaces/game-info.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GameVerveService } from '../../services/game-serve.service';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-info-game-component',
  templateUrl: './info-game-component.component.html',
  styleUrls: ['./info-game-component.component.css']
})
export class InfoGameComponent implements OnInit {

  // Propiedades:
  public game?: GameInfo;
  public errorApi: boolean = false;
  public isLoading: boolean = false;

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
    delay(1000),
    switchMap(({ id }) => this.gameVerseServicio.getInfoGameById(id))
   )
   .subscribe({
      next: (respuesta) =>{
        // Si no existe el id llevame a la pagina principal
        if( !respuesta ) return this.route.navigate(['/gameverse/info-error'])

        this.isLoading = true;
        setTimeout(() =>{
          this.game = respuesta;
          this.isLoading = false
        },1500)

        return
    },
    error: (error) => {
      console.log('hay un error en la api')
      this.errorApi = true;
      console.log(`${error.status}`)
    }
   })
  }


  /**
   * Este metodo nos permite para
   * validar por nombre
   * dependiendo el caso dira si es steam, xbox, playstation
   * @param platform es de tipo string
   * @returns retorna un string
   */
  public showIconForNames(platform: string) : string{

    switch(platform){
      case 'pc':
        return 'fa-brands fa-steam'
      case 'xbox-one':
      case 'xbox-series-x':
      case 'xbox360':
        return 'fa-brands fa-xbox'
      case 'playstation5':
      case 'playstation4':
      case 'playstation3':
      case 'playstation2':
        return 'fa-brands fa-playstation'
      default:
        return 'fa-solid fa-gamepad'

    }

  }



}
