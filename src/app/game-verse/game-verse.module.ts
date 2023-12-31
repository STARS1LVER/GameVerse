// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// Componentes
import { GenresListGamesComponent} from './pages/genres-list-games-component/genres-list-games-component.component';
import { GenresPageComponent } from './pages/genres-page-component/genres-page-component.component';
import { InfoGameComponent } from './pages/info-game-component/info-game-component.component';
import { ListGamePageComponent } from './pages/list-game-page-component/list-game-page-component.component';
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
import { TitleGamePipe } from './pipes/title-game.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageGamePipe } from './pipes/image.pipe';
import { InfoErrorGameComponentComponent } from './pages/info-error-game-component/info-error-game-component.component';
import { GameNotFoundComponent } from './components/game-not-found/game-not-found.component';



@NgModule({
  declarations: [
    GenresListGamesComponent,
    GenresPageComponent,
    InfoGameComponent,
    LayoutPageComponent,
    ListGamePageComponent,
    PlatformListGamesComponent,
    PlatformPageComponent,
    SearchGameComponent,
    TopGamesComponent,
    WelcomePageComponent,
    CardGameComponent,
    PaginatorGameComponent,
    SpinnerGameComponent,
    DescriptionPipe,
    CardExtraComponent,
    TitleGamePipe,
    ImageGamePipe,
    InfoErrorGameComponentComponent,
    GameNotFoundComponent
  ],
  imports: [
    CommonModule,
    GameVerseRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ]
})
export class GameVerseModule { }
