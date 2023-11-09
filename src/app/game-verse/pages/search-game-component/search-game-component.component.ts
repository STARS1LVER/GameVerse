import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameVerveService } from '../../services/game-serve.service';
import { Result } from '../../interfaces/list-games.interface';

@Component({
  selector: 'app-search-game-component',
  templateUrl: './search-game-component.component.html',
  styleUrls: ['./search-game-component.component.css'],
})
export class SearchGameComponent {
  // Formulario Input
  public myInputForm: FormGroup = this.formB.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  // Propiedades:
  public gamesBySearch!: Result[];
  public currentPage: number = 1;
  public isLoading: boolean = false;
  public errorsForm: boolean = false;
  public notSearch: boolean = false;
  public notPaginator: boolean = true;
  public nextPage: boolean = false;

  // Inyectamos en el constructor
  constructor(
    private formB: FormBuilder,
    private gameVerseService: GameVerveService
  ) {}

  /**
   * este metodo nos permite validar y si esta correcto
   * manda ese valor al metodo que obtiene los games
   * @returns void
   */
  public onSubmitForm(): void {
    if (this.myInputForm.invalid) {
      // si esta invalido toca todo (errores)
      this.myInputForm.markAllAsTouched();
      console.log(this.myInputForm.controls['name'].errors);
      // Que se muestren los errores
      this.errorsForm = true;
      // Que no se muestre el not-game-component search
      this.notSearch = false;
      return;
    }


    console.log(this.myInputForm.controls['name'].value);

    // inicializamos la pagina en uno  para que cada busqueda inicialice en uno
    this.currentPage = 1;

    // llamamos al metodo y le pasamos el valor del input y la pagina a mostrar
    this.getGamesBySearch(this.myInputForm.controls['name'].value,this.currentPage);
  }

  /**
   * este metodo es para capturar los errores que aya en el campo
   * del input
   * @returns retorna un string o un null
   */
  public getFielError(): string | null {
    // le asignamos los errores a una variable
    const errors = this.myInputForm.controls['name'].errors || {};

    // Recorremos las llaves
    for (const keys of Object.keys(errors)) {
      switch (keys) {
        // y si es required o minlength retornamos dicho string
        case 'required':
          return 'The field is required, you cannot submit the field empty! ';
        case 'minlength':
          return `You need a minimum of ${errors['minlength'].requiredLength} characters to search for the game.`;
      }
    }

    return null;
  }

  /**
   * en este metodo nos permite controlar el componente paginator
   * @param page number  este parametro lo recibe desde el html
   * @returns void
   */
  public getPageByEvent(page: number) {

    // le establecemos el valor del page al currentPage
    this.currentPage = page;

    // si es menor o igual a 0
    if ( this.currentPage <= 0 ) return;

    // llamamos el metodo getGamesBySearch y le pasamos los valores
    this.getGamesBySearch( this.myInputForm.controls['name'].value,this.currentPage );
  }


  /**
   * Este metodo nos permite controlar unas variables de visualizacion y renderizar las
   * cards de los games
   * @param campo string
   * @param page number
   */
  public getGamesBySearch(campo: string, page: number) {
    // que se muestre el spinner
    this.isLoading = true;
    // Que se oculte el paginator
    this.notPaginator = true;
    // Llamamos el servicio y accedemos el metodo y le pasamos los campos
    this.gameVerseService.getListGamesBySearch(campo, page).subscribe({
      next: (respuesta) => {
        // Establecemos una espera con el setTimeOut
        setTimeout(() => {
          // ocultamos los errores del input
          this.errorsForm = false;

          // si la longitud de la respuesta es igual a 0
          if (respuesta.results.length === 0) {
            // muestar not-game-component
            this.notSearch = true;
            // y oculta el spinner
            this.isLoading = false;
          } else {
            // muestra el paginator
            this.notPaginator = false;
            // oculta el juego not found
            this.notSearch = false;
            // oculta el spinner
            this.isLoading = false;
            // Hacemos un operador ternario para controlar el valor del nextPage, para
            // ocultar el paginator si el nextPage es nulo
            respuesta.next === null ? this.nextPage = true : this.nextPage = false;

            this.gamesBySearch = respuesta.results;
          }
        }, 1500);
      },
      error: () => {
        console.log('hay un error');
      },
    });
  }
}
