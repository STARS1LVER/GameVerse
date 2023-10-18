// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Componentes
import { GenresListGamesComponent} from './pages/genres-list-games-component/genres-list-games-component.component';
import { GenresPageComponent } from './pages/genres-page-component/genres-page-component.component';
import { InfoGameComponent } from './pages/info-game-component/info-game-component.component';
import { ListGamePageComponent } from './pages/list-game-page-component/list-game-page-component.component';
import { NextGamesPageComponent } from './pages/next-games-page-component/next-games-page-component.component';
import { PlatformListGamesComponent } from './pages/platform-list-games-component/platform-list-games-component.component';
import { PlatformPageComponent } from './pages/platform-page-component/platform-page-component.component';
import { SearchGameComponent } from './pages/search-game-component/search-game-component.component';
import { TopGamesComponent } from './pages/top-games-component/top-games-component.component';
import { WelcomePageComponent } from './pages/welcome-page-component/welcome-page-component.component';
import { LayoutPageComponent} from './layout/layout-page-component/layout-page-component.component';
import { NgOptimizedImage } from '@angular/common';

// Modulos
import { GameVerseRoutingModule } from './game-verse-routing.module';
import { CardGameComponent } from './components/card-game/card-game.component';
import { PaginatorGameComponent } from './components/paginator-game/paginator-game.component';
import { SpinnerGameComponent } from './components/spinner-game/spinner-game.component';

// Pipes
import { DescriptionPipe } from './pipes/description.pipe';
import { CardExtraComponent } from './components/card-extra/card-extra.component';



@NgModule({
  declarations: [
    GenresListGamesComponent,
    GenresPageComponent,
    InfoGameComponent,
    LayoutPageComponent,
    ListGamePageComponent,
    NextGamesPageComponent,
    PlatformListGamesComponent,
    PlatformPageComponent,
    SearchGameComponent,
    TopGamesComponent,
    WelcomePageComponent,
    CardGameComponent,
    PaginatorGameComponent,
    SpinnerGameComponent,
    DescriptionPipe,
    CardExtraComponent
  ],
  imports: [
    CommonModule,
    GameVerseRoutingModule,
    NgOptimizedImage
  ]
})
export class GameVerseModule { }
