import {Component, OnInit} from "@angular/core";
import {PlayerService} from "../../services/player.service";
import {IPlayer} from "../../interfaces/player.interface";
import {SquadMemberRole} from "./enums/player.enum";
import {playerImagePlaceholder } from '../../../../../assets/resources/placeholder';
import {Router} from "@angular/router";
import {ApiLinksEnum} from "../../../core/api/enums/api-links/api-links.enum";

@Component({
    selector: 'app-player-component',
    styleUrls: ['./player.component.scss'],
    templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
    public squad: IPlayer[] = [];
    public squadMemberRole: typeof SquadMemberRole = SquadMemberRole;
    public clubCrestUrl: string;
    public playerImagePlaceholder: string = playerImagePlaceholder;
    public _router: Router;
    public clubName: string;
    public infoGridHeader: any;
    public formConfig: any;

    private _playerService: PlayerService;
    private  _response: any;

    constructor(playerService: PlayerService, router: Router) {
        this._playerService = playerService;
        this._router = router;
    }

    public ngOnInit(): void {
        this._getPlayers();
    }

    public getPlayerInfo(player: IPlayer): void {
        this._router.navigate(['players', player.id], {state: {data: player}});
        sessionStorage.setItem('player', JSON.stringify(player));
    }

    public onCheckBox(event: any ): void {
        const fieldName: string = (<HTMLInputElement>event.target).name;
        const selectedField: any = this.formConfig.model.fields.filter((field: any): boolean => {
            return fieldName.toLowerCase() === field.name.toLowerCase();
        })[0];

        selectedField.value = !selectedField.value;

        if (selectedField.value) {
           const filtered = this.squad.filter((player: IPlayer): any => {
               if(player.position) {
                   return player.position.toLowerCase() === selectedField.name.toLowerCase();
               }
           });

           this.squad = filtered;

        } else {
            this.squad = this._response.squad;
        }
    }

    private _getPlayers(): void {
        this._playerService.getPlayers(ApiLinksEnum.DATA).subscribe((response: any): void => {
            // Refactor
            this._response = response;
            this.clubName = response.name;
            this.squad = response.squad;
            this.clubCrestUrl = response.crestUrl;
            this.infoGridHeader = this._playerService.getInfoGridHeader();

            this.formConfig = this._playerService.getFormConfig();
            console.log(this.formConfig)
        });


    }
}