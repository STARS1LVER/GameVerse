import { Component, OnInit } from '@angular/core';
import { ResultGenres } from '../../interfaces/genres.interface';
import { GameVerveService } from '../../services/game-serve.service';

@Component({
  selector: 'app-genres-page-component',
  templateUrl: './genres-page-component.component.html',
  styleUrls: ['./genres-page-component.component.css']
})
export class GenresPageComponent  implements OnInit {

  // Propiedades:
  public listGenresOpcion!: ResultGenres[];
  public isLoading: boolean = false;
  public opcionCard: string = 'genres-list'

  constructor( private gameVerseService: GameVerveService ){}


  ngOnInit(): void {
    this.getListOpcionsGenres()

  }

  public getListOpcionsGenres(): void {

    this.gameVerseService.getListGenres()
    .subscribe({
      next: (respuesta) =>{
        this.listGenresOpcion = respuesta
      },
      error: () =>{
        console.log('Hay un error!')
      }
    })

  }





}
