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


  constructor(
    private gameVerveService: GameVerveService
  ){}


  ngOnInit(): void {
    this.getListPlatform()
  }


  public getListPlatform(): void {

    this.gameVerveService.getListPlatform()
    .subscribe({
      next: ( respuesta ) => {
        this.platformList = respuesta
      },
      error: (error) => {
        console.log(`Hay un error: ${error}`)
      }
    })

  }



}
