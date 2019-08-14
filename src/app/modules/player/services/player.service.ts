import {MyTeamModel} from "../../core/model/my-team-model";
import {Injectable} from "@angular/core";
import {IPlayer} from "../interfaces/player.interface";
import {Observable} from "rxjs";

@Injectable()
export class PlayerService {
  public squad: IPlayer[];
  private _myTeamModel: MyTeamModel;

  constructor(myTeamModel: MyTeamModel) {
    this._myTeamModel = myTeamModel;
  }

  public getPlayers(url: string): any {
    return this._myTeamModel.get(url);
  }

  public getImage(url: string): any {
    return this._myTeamModel.get(url)
  }

  public getFormConfig(): any {
    return {
      model: {
        fields: [
          {
            name: 'search',
            value: ''
          },
          {
            name: 'goalKeeper',
            value: false
          },
          {
            name: 'defender',
            value: false
          },
          {
            name: 'midfielder',
            value: false
          },
          {
            name: 'attacker',
            value: false,
          },
        ]
      },
      settings: {
        showActions: false
      }
    }
  }

  public getInfoGridHeader(): any {
    return [
      {
        text: 'Nationality'
      },
      {
        text: 'Position'
      },
      {
        text: 'Date Of Birth'
      },
      {
        text: 'Role'
      }
    ];
  }



}