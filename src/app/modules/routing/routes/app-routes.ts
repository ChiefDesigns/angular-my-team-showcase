import {Routes} from "@angular/router";
import {PlayerInfoComponent} from "../../player/presentation-components/player-info/player-info.component";
import {AppComponent} from "../../../app.component";
import {PlayerComponent} from "../../player/business-components/player/player.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'players',
        pathMatch: 'full'
    },
    {
        path: 'players',
        component: PlayerComponent,
    },
    {
        path: 'players/:id',
        component: PlayerInfoComponent,
    }
]