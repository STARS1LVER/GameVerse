import { Component, Input, OnInit } from '@angular/core';
import { ResultPlatform } from '../../interfaces/platform.interface';

@Component({
  selector: 'card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.css']
})
export class CardExtraComponent implements OnInit {

  // Propiedades:
  // Creamos el input para recibir la lista de plataformas
  @Input()
  public platformList!: ResultPlatform

  ngOnInit(): void {
    if(!this.platformList) throw new Error('Property PlatformList is required');
  }








}
