import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gameverse',
    loadChildren: () => import('./game-verse/game-verse.module').then( modulo => modulo.GameVerseModule )
  },

  {
    path: '**',
    redirectTo: 'gameverse'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
