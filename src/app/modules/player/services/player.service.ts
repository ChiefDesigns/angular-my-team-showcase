import {AppModel} from "../../core/model/app-model";
import {Injectable, Renderer2} from "@angular/core";
import {IPlayer} from "../interfaces/player.interface";
import {Observable} from "rxjs";
import {ModelInstance} from "../../core/model/model-instance/model-instance";
import {IFormConfig} from "../../forms/form/interfaces/form.component.interface";
import {IInfoGridHeader} from "../../ux/info-grid/interfaces/info-grid.component.interface";
import { ITableConfigHeader } from "../../ux/presentation-components/table/interfaces/table.interface";

@Injectable()
export class PlayerService {
  public filtered: IPlayer[] = [];

  private _appModel: AppModel;

  constructor(myTeamModel: AppModel, ) {
    this._appModel = myTeamModel;
  }

  public getPlayers(url: string): Observable<ModelInstance> {
    return this._appModel.get(url);
  }

  public getFormConfig(): IFormConfig {
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

  public getInfoGridHeader(): IInfoGridHeader[] {
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

  public setTableHeaderFieldConfig(): ITableConfigHeader {
    return  {
        items: [
          {
            text: 'Name',
            fieldId: 'name'
          },
          {
            text: 'Nationality',
            fieldId: 'nationality'
          },
          {
            text: 'Position',
            fieldId: 'position'
          },
          {
            text: 'Date Of Birth',
            fieldId: 'dateOfBirth'
          },
          {
            text: 'Role',
            fieldId: 'role'
          }
        ],
      }
  }
}