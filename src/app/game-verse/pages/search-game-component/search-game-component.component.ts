import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameVerveService } from '../../services/game-serve.service';

@Component({
  selector: 'app-search-game-component',
  templateUrl: './search-game-component.component.html',
  styleUrls: ['./search-game-component.component.css']
})
export class SearchGameComponent {

  // Formulario Input
  public myInputForm:FormGroup =   this.formB.group({
    name: ['', [Validators.required]]
  })

  // Propiedades:
  public currentPage: number = 1;
  

  constructor(
    private formB: FormBuilder,
    private gameVereService: GameVerveService
  ){}

}
