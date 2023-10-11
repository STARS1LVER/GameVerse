import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})


export class PaginatorService {


  public actualPage: number = 1;


  get currentPage(): number {
    return this.actualPage
  }

  public setCurrentPage(page: number){
    console.log(`${page} desde el paginator service`)
    return  this.actualPage = page;
  }

}
