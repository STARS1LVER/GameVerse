import { Component, Input, OnInit } from '@angular/core';
import { ResultPlatform } from '../../interfaces/platform.interface';
import { ResultGenres } from '../../interfaces/genres.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.css']
})
export class CardExtraComponent implements OnInit {

  // Propiedades:
  // Creamos el input para recibir la lista de plataformas
  @Input()
  public platformList!: ResultPlatform | ResultGenres

  @Input()
  public opcionView!: string

  constructor( private router: Router ){

  }

  ngOnInit(): void {
    if(!this.platformList) throw new Error('Property PlatformList is required');
    // console.log( this.opcionView )
  }


  public hola(){
    if( this.opcionView === 'platform'  ){
      this.router.navigate(['/gameverse/platform-list', this.platformList.slug, this.platformList.id])

    } else {
      this.router.navigate(['/gameverse/genres-list',this.platformList.slug, this.platformList.id])
    }
  }





}
