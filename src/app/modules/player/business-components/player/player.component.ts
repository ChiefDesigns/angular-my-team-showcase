import {
    Component,
    ElementRef,
    OnInit,
    QueryList,
    Renderer2,
    ViewChildren
} from "@angular/core";
import {PlayerService} from "../../services/player.service";
import {playerImagePlaceholder } from '../../../../../assets/resources/placeholder';
import {Router} from "@angular/router";
import {ApiLinksEnum} from "../../../core/api/enums/api-links/api-links.enum";
import {ModelInstance} from "../../../core/model/model-instance/model-instance";
import {ITeamProps} from "./interfaces/team.interface";
import {SquadMemberRole} from "./enums/player.enum";
import {IFormConfig} from "../../../forms/form/interfaces/form.component.interface";
import {IPlayer} from "../../interfaces/player.interface";

@Component({
    selector: 'app-player-component',
    styleUrls: ['./player.component.scss'],
    templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
    public team: ITeamProps;
    public showTeam: boolean = false;
    public playerImagePlaceholder: string = playerImagePlaceholder;
    public _router: Router;
    public infoGridHeader: any[];
    public formConfig: IFormConfig;

    private _playerService: PlayerService;
    private  _response: ModelInstance;
    private readonly _renderer2: Renderer2;

    constructor(playerService: PlayerService, router: Router, renderer2: Renderer2) {
        this._playerService = playerService;
        this._router = router;
        this._renderer2 = renderer2;
    }

    @ViewChildren('checkboxInput') set checkbox(checkboxes: QueryList<ElementRef>) {
        if(checkboxes.length) {
            this._playerService.onCheckBoxFilter({
                checkboxes,
                event,
                renderer: this._renderer2,
                squad: this._response && this._response.items,
                hostComponent: this,
            });
        }
    };

    public ngOnInit(): void {
        this._getPlayers();
        this.infoGridHeader = this._playerService.getInfoGridHeader();
        this.formConfig = this._playerService.getFormConfig();
    }

    public getPlayerInfo(player: IPlayer): void {
        this._router.navigate(['players', player.id], {state: {data: player}});
        sessionStorage.setItem('player', JSON.stringify(player));
    }

    public onCheckBox(): void {
        this.team.squad = this._playerService.filtered;
    }

    public onKeyUp(event: any): void {
        const searchValue: string = event.target.value;
        const results: IPlayer[] = this._setTeamOnKeyUp(searchValue);

        this.team.squad = results.length ? results : this._response.items;
    }

    private _getPlayers(): void {
        this._playerService.getPlayers(ApiLinksEnum.DATA).subscribe((response: ModelInstance): void => {
            this._response = response;
            this.team = this._setTeamProps(response);
            this.showTeam = true;
        });
    }

    private _setTeamProps(response: ModelInstance): ITeamProps {
        return {
            name: response.attributes.name,
            clubCrestUrl: response.attributes.crestUrl,
            squad: response.items,
            squadMemberRole: SquadMemberRole
        };
    }

    private _setTeamOnKeyUp(searchValue: string): IPlayer[] {
        const model: IPlayer[] = this._playerService.filtered.length ? this._playerService.filtered : this._response.items;

        if (searchValue) {
            return searchValue ? this._playerService.search(
                model,
                searchValue
            ) : this._response.items
        }

        return this._playerService.filtered.length ? model : this._response.items;
    }
}