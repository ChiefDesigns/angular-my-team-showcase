import {IPlayer} from "../../../interfaces/player.interface";
import {IInfoGridConfigHeader} from "../../../../ux/info-grid/info-grid.interface";
import {ITeamProps} from "../../../business-components/player/interfaces/team.interface";

export interface IPlayerCard {
    config: IPlayerCardConfig;
    playerImagePlaceholder: string;
}

export interface IPlayerCardConfig {
    infoGridHeader: IInfoGridConfigHeader[];
    team: ITeamProps;
    player: IPlayer;
    getPlayerInfo: () => void;
}