import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GnresListGamesComponentComponent } from './pages/gnres-list-games-component/gnres-list-games-component.component';
import { GenresListGamesComponentComponent } from './pages/genres-list-games-component/genres-list-games-component.component';
import { GenresPageComponentComponent } from './pages/genres-page-component/genres-page-component.component';
import { InfoGameComponentComponent } from './pages/info-game-component/info-game-component.component';
import { ListGamePageComponentComponent } from './pages/list-game-page-component/list-game-page-component.component';
import { NextGamesPageComponentComponent } from './pages/next-games-page-component/next-games-page-component.component';
import { PlatformListGamesComponentComponent } from './pages/platform-list-games-component/platform-list-games-component.component';
import { PlatformPageComponentComponent } from './pages/platform-page-component/platform-page-component.component';
import { SearchGameComponentComponent } from './pages/search-game-component/search-game-component.component';
import { TopGamesComponentComponent } from './pages/top-games-component/top-games-component.component';
import { WelcomePageComponentComponent } from './pages/welcome-page-component/welcome-page-component.component';
import { LayoutPageComponentComponent } from './layout/layout-page-component/layout-page-component.component';



@NgModule({
  declarations: [
    GnresListGamesComponentComponent,
    GenresListGamesComponentComponent,
    GenresPageComponentComponent,
    InfoGameComponentComponent,
    ListGamePageComponentComponent,
    NextGamesPageComponentComponent,
    PlatformListGamesComponentComponent,
    PlatformPageComponentComponent,
    SearchGameComponentComponent,
    TopGamesComponentComponent,
    WelcomePageComponentComponent,
    LayoutPageComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameVerseModule { }
