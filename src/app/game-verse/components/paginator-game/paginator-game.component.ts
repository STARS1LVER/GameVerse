import { Component } from '@angular/core';
import { PaginatorService } from '../../services/paginator.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'paginator-game',
  templateUrl: './paginator-game.component.html',
  styleUrls: ['./paginator-game.component.css']
})
export class PaginatorGameComponent {


  public page: number = 1;

  private currentPageChanged: Subject<number> = new Subject()


  constructor( private paginatorService: PaginatorService ) {}


  public changePage( page: number ){
    if( page <= 0 ) return
    this.page = page
    this.paginatorService.setCurrentPage(this.page);
    this.currentPageChanged.next(this.page)
  }

}
