import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import { map } from 'rxjs/operators';
import {IPlayer} from "../../interfaces/player.interface";

@Component({
    selector: 'app-player-info',
    styleUrls: ['./player-info.component.scss'],
    templateUrl: './player-info.component.html'
})
export class PlayerInfoComponent {
    public player: IPlayer;
    public biography: string;
    private _activatedRoute: ActivatedRoute;
    private _squad: IPlayer[];
    constructor(activatedRoute: ActivatedRoute) {
        this._activatedRoute = activatedRoute;
        this._activatedRoute.params.subscribe((item: any): void => {
            const player: IPlayer = JSON.parse(sessionStorage.getItem('player'));

            if (player) {
                this.player = player;
                this.biography = player.biography.replace(/\\n/g, "<br />");
            }
        });
    }
}