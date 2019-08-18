import {AppModel} from "../../core/model/app-model";
import {Injectable, Renderer2} from "@angular/core";
import {IPlayer} from "../interfaces/player.interface";
import {Observable} from "rxjs";
import {ModelInstance} from "../../core/model/model-instance/model-instance";
import {PlayerFilter} from "../business-components/player/enums/player.enum";
import {IFormConfig} from "../../forms/form/interfaces/form.component.interface";
import {IInfoGridHeader} from "../../ux/info-grid/interfaces/info-grid.component.interface";

@Injectable()
export class PlayerService {
  public filtered: IPlayer[] = [];

  private _appModel: AppModel;
  private _checked: string[] = [];

  constructor(myTeamModel: AppModel, ) {
    this._appModel = myTeamModel;
  }

  public getPlayers(url: string): Observable<ModelInstance> {
    return this._appModel.get(url);
  }

  public search (model: IPlayer[], searchValue: string): any {
    const filtered: IPlayer[] = model.filter((player: IPlayer): any => {
      return player.name.toLowerCase().search(searchValue) !== -1;
    });

    return filtered;
  }

  public onCheckBoxFilter(config: any): any {
    const {checkboxes, renderer, squad } = config;

    this._filterSquad(checkboxes, renderer, squad)
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

  private _filterSquad(checkboxes: any[], renderer: Renderer2, squad: IPlayer[]): void {
    if(checkboxes && checkboxes.length) {

      checkboxes.forEach((checkbox: any): void => {
        renderer.listen(checkbox.nativeElement, 'click', (event: any): any => {
          this._setFiltered(checkbox, squad);
        });
      });
    }
  }

  private _setFiltered(checkbox: any, squad: IPlayer[]): void {
    if (checkbox.nativeElement.checked) {
      this._setCheckedFilter(checkbox, squad);
    } else {
      this._removeCheckedFilter(checkbox);
    }
  }

  private _extractFiltered(filter: string, squad: any): any {
    const filtered = squad.filter((player: any): any => {
      if(player.position) {
        return filter.toLowerCase() === player.position.toLowerCase()
      }
    });

    return filtered;

  }

  private _setCheckedFilter(checkbox: any, squad: IPlayer[]): void {
    const order: number = Number(PlayerFilter[checkbox.nativeElement.name.toUpperCase()]);
    const filteredByPosition: IPlayer[] = [];

    if(this._checked.indexOf(checkbox.nativeElement.name) === -1) {
      this._checked[order] = (checkbox.nativeElement.name);
    }

    this._checked.forEach((filter: string): void => {
      filteredByPosition.push(...this. _extractFiltered(filter, squad))
    })

    this.filtered = filteredByPosition;
  }

  private _removeCheckedFilter(checkbox: any): void {
    const index: number = this._checked.indexOf(checkbox.nativeElement.name);
    if (index !== -1) {
      this._checked.splice(index, 1);
    }

    if (this._checked.length) {

      this._checked.forEach((): void => {
        this.filtered = this.filtered.filter((player: IPlayer): any => {
          return checkbox.nativeElement.name !== player.position.toLowerCase();
        });
      })
    } else {
      this.filtered = [];
    }
  }

}