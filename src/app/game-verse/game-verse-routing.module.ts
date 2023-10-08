import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page-component/layout-page-component.component';
import { WelcomePageComponent } from './pages/welcome-page-component/welcome-page-component.component';
import { ListGamePageComponent} from './pages/list-game-page-component/list-game-page-component.component';
import { SearchGameComponent } from './pages/search-game-component/search-game-component.component';
import { NextGamesPageComponent } from './pages/next-games-page-component/next-games-page-component.component';
import { TopGamesComponent } from './pages/top-games-component/top-games-component.component';
import { InfoGameComponent } from './pages/info-game-component/info-game-component.component';
import { GenresPageComponent } from './pages/genres-page-component/genres-page-component.component';
import { PlatformPageComponent } from './pages/platform-page-component/platform-page-component.component';
import { PlatformListGamesComponent } from './pages/platform-list-games-component/platform-list-games-component.component';
import { GenresListGamesComponent } from './pages/genres-list-games-component/genres-list-games-component.component';

// Configuracion De Rutas
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'welcome-page',      component: WelcomePageComponent       },
      { path: 'list-games',        component: ListGamePageComponent      },
      { path: 'search-games',      component: SearchGameComponent        },
      { path: 'next-games',        component: NextGamesPageComponent     },
      { path: 'top-games',         component: TopGamesComponent          },
      { path: 'genres-games',      component: GenresPageComponent        },
      { path: 'platform-games',    component: PlatformPageComponent      },
      { path: 'info-game/:id',     component: InfoGameComponent          },
      { path: 'platform-list/:id', component: PlatformListGamesComponent },
      { path: 'genres-list/:id',   component: GenresListGamesComponent   },
      { path: '**',                redirectTo: 'welcome-page'            },
    ]
  }
]




@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule],

})
export class GameVerseRoutingModule { }
