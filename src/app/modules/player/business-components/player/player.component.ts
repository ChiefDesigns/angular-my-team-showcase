import {
    Component,
    OnInit,
    Renderer2,
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
import {ITableConfig, ITableConfigBodyItem} from "../../../ux/presentation-components/table/interfaces/table.interface";
import {BehaviorSubject} from "rxjs";
import {IPlayerFormConfig} from "./form/interfaces/player-form.interface";
import {IPlayerCardConfig} from "../../presentation-components/player-card/interfaces/player-car.interface";

@Component({
    selector: 'app-player-component',
    styleUrls: ['./player.component.scss'],
    templateUrl: './player.component.html'
})
export class PlayerComponent implements  OnInit {
    public team: ITeamProps;
    public _router: Router;
    public infoGridHeader: any[];
    public formConfig: IFormConfig;
    public tableConfig: ITableConfig;
    public gridView: boolean;
    public formFilterConfig: IPlayerFormConfig;
    public list: IPlayer[];

    private _playerService: PlayerService;
    private  _response: ModelInstance;
    private readonly _renderer2: Renderer2;
    private _listSubject: BehaviorSubject<IPlayer[]>;

    constructor(playerService: PlayerService, router: Router, renderer2: Renderer2) {
        this._playerService = playerService;
        this._router = router;
        this._renderer2 = renderer2;
    }

    public ngOnInit(): void {
        this._getPlayers();
        this.infoGridHeader = this._playerService.getInfoGridHeader();
        this.formConfig = this._playerService.getFormConfig();
    }

    public getPlayerInfo(player: IPlayer): void {
        this._router.navigate(['players', player.id], {state: {data: player}});
        sessionStorage.setItem('player', JSON.stringify(player));
    }

    public onSort(): void {
        this._listSubject.subscribe((nextList: IPlayer[]): void => {
            this.list = nextList.length ? nextList : this.team.squad;
            this.tableConfig.body.items = this._mapTableBodyItems();
        })
    }

    public setPlayerCardConfig(player: IPlayer): IPlayerCardConfig {
        return {
            infoGridHeader: this.infoGridHeader,
            player,
            team: this.team,
            getPlayerInfo: (): void => {
                this.getPlayerInfo(player)
            },

        }
    }

    public toggleView(): void {
        this.gridView = !this.gridView;
    }

    private _getPlayers(): void {
        this._playerService.getPlayers(ApiLinksEnum.DATA).subscribe((response: ModelInstance): void => {
            this._response = response;
            this.list = response.items;
            this.team = this._setTeamProps(response);
            this.gridView = true;
            this._setTableConfig(this._mapTableBodyItems());
            this._listSubject = new BehaviorSubject(response.items);
            this._setFormConfig(response);
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

    private _setFormConfig(response: ModelInstance): void {
        this.formFilterConfig = {
            sortModel: {
                collection: response.items
            },
            listSubject: this._listSubject,
        }
    }

    private _setTableConfig(bodyItems: ITableConfigBodyItem[]): void {
        this.tableConfig = {
            header: this._playerService.setTableHeaderFieldConfig(),
            body: {
                items: bodyItems
            }
        };
    }

    private _mapTableBodyItems(): ITableConfigBodyItem[] {
        return this.list.map((player: IPlayer): any => {
            const { dateOfBirth, image, name, nationality, position, role, } = player;

            return { dateOfBirth, image, name, nationality, position, role };
        });
    }
}