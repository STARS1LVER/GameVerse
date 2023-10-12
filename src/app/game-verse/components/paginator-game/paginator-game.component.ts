import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'paginator-game',
  templateUrl: './paginator-game.component.html',
  styleUrls: ['./paginator-game.component.css']
})
export class PaginatorGameComponent {

  // Propiedades:
  public page:number = 1;

  // creamos la propiedad que emitira cuando se realice un evento
  @Output()
  public pageChange = new EventEmitter<number>()

  /**
   * Este metodo nos permite saber
   * en que pagina se encuetra el paginator actualmente
   * @param page number
   * @returns void
   */
  public changePage(page: number){

    this.page = page

    // Emitimos
    this.pageChange.emit(this.page)
  }

}
