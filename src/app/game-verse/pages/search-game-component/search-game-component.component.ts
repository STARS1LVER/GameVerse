import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameVerveService } from '../../services/game-serve.service';
import { Result } from '../../interfaces/list-games.interface';

@Component({
  selector: 'app-search-game-component',
  templateUrl: './search-game-component.component.html',
  styleUrls: ['./search-game-component.component.css']
})
export class SearchGameComponent {

  // Formulario Input
  public myInputForm:FormGroup =   this.formB.group({
    name: ['', [Validators.required, Validators.minLength(3)]]
  })

  // Propiedades:
  public gamesBySearch!: Result[];
  public currentPage: number = 1;
  public isLoading: boolean = false;
  public errorsForm: boolean = false


  constructor(
    private formB: FormBuilder,
    private gameVereService: GameVerveService
  ){}


  public onSubmitForm(): void {

    // console.log( this.myInputForm.value )

    if( this.myInputForm.invalid ){
      this.myInputForm.markAllAsTouched();
      console.log(this.myInputForm.controls['name'].errors);
      this.errorsForm = true;
      return
    };

    console.log(this.myInputForm.controls['name'].value)

    this.gameVereService.getListGamesBySearch(this.myInputForm.controls['name'].value)
    .subscribe({
      next: (respuesta) => {
          this.errorsForm = false;
          this.gamesBySearch = respuesta
          console.log(respuesta)
      },
      error: () => {
        console.log('hay un error')
      }
    })



  }

  /**
   *
   * @returns 
   */
  public getFielError(): string | null{

    const errors = this.myInputForm.controls['name'].errors || {};

    for(const keys of Object.keys(errors)){
      switch(keys){
        case 'required' :
          return 'El campo es requerido no puedes enviar el campo vacio!'
        case 'minlength':
          return `Necesitas minimo ${errors['minlength'].requiredLength} Caracteres para buscar el juego`
      }
    }

    return null




  }



}
