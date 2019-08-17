import {SquadMemberRole} from "../enums/player.enum";
import {IPlayer} from "../../../interfaces/player.interface";

export interface ITeamProps {
    name: string;
    clubCrestUrl: string;
    squad: IPlayer[];
    squadMemberRole: typeof SquadMemberRole;
}