import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'paginator-game',
  templateUrl: './paginator-game.component.html',
  styleUrls: ['./paginator-game.component.css']
})
export class PaginatorGameComponent {

  public page:number = 1;

  @Output()
  public pageChange = new EventEmitter<number>()


  public changePage(page: number){

    this.page = page

    this.pageChange.emit(this.page)
  }

}
