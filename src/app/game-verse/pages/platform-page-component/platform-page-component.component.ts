import { Component, OnInit } from '@angular/core';
import { ResultPlatform } from '../../interfaces/platform.interface';
import { GameVerveService } from '../../services/game-serve.service';

@Component({
  selector: 'app-platform-page-component',
  templateUrl: './platform-page-component.component.html',
  styleUrls: ['./platform-page-component.component.css'],
})
export class PlatformPageComponent implements OnInit {
  // Propiedades:
  public platformList!: ResultPlatform[];
  public isLoading: boolean = false;
  public opcion: string = 'platform-list'

  // Inyectamos en el constructor
  constructor(
    private gameVerveService: GameVerveService
  ){}


  ngOnInit(): void {
    this.getListPlatform()
  }


  /**
   * este metodos nos permite obtener y asignarle
   * valor a la propiedad platformList
   * @returns void
   */
  public getListPlatform(): void {

    // le asignamos el valor true para que se muestre
    this.isLoading = true;

    this.gameVerveService.getListPlatform()
    .subscribe({
      next: ( respuesta ) => {
        // Usamos el timeOut para mostrar ciertos segundos el spinner
        setTimeout(() => {
          this.platformList = respuesta
          this.isLoading = false
        },1500)
      },
      error: (error) => {
        console.log(`Hay un error: ${error}`)
      }
    })

  }



}
