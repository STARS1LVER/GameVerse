import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-error-game-component',
  templateUrl: './info-error-game-component.component.html',
  styleUrls: ['./info-error-game-component.component.css']
})
export class InfoErrorGameComponentComponent implements OnInit {

  // Properties:
  seconds: number = 5;


  constructor( private router:Router ){}

  ngOnInit(): void {
    this.timeForWelcome()
  }


  public timeForWelcome(){
    const intervalodID = setInterval(() => {
      this.seconds --;

      if( this.seconds  === 0){
        this.router.navigate(['/gameverse/welcome-page'])
        clearInterval(intervalodID);
      }
    },1000)
  }

}
