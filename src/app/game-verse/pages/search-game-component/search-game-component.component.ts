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
  public notSearch: boolean = false



  constructor(
    private formB: FormBuilder,
    private gameVerseService: GameVerveService
  ){}


  public onSubmitForm(): void {


    if( this.myInputForm.invalid ){
      this.myInputForm.markAllAsTouched();
      console.log(this.myInputForm.controls['name'].errors);
      this.errorsForm = true;
      this.notSearch = false;
      return
    };

    console.log(this.myInputForm.controls['name'].value)

    this.getGamesBySearch(this.myInputForm.controls['name'].value, this.currentPage)


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


  public getPageByEvent( page: number ){

    this.currentPage = page;

    if( this.currentPage <= 0 ) return

    this.getGamesBySearch(this.myInputForm.controls['name'].value, this.currentPage)



  }


  public getGamesBySearch( campo: string, page: number){

    this.gameVerseService.getListGamesBySearch(campo, page)
    .subscribe({
      next: (respuesta) => {
          this.errorsForm = false;
          if( respuesta.length === 0){
            this.notSearch = true;
          } else {
            this.gamesBySearch = respuesta
            this.notSearch = false;
            console.log(respuesta)
          }
      },
      error: () => {
        console.log('hay un error')
      }
    })
  }


}
