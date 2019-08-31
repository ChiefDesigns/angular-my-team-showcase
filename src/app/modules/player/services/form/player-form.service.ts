import { Injectable } from '@angular/core';
import {PlayerFilter} from "../../business-components/player/enums/player.enum";
import {IPlayer} from "../../interfaces/player.interface";
import {ISortDirectiveEvent} from "../../../ux/directives/sort/interfaces/sort.directive.interface";

@Injectable({
  providedIn: 'root'
})
export class PlayerFormService {
  private _checkedInOrder: string[] = [];
  private _filtered: IPlayer[] = [];

  constructor() { }

  public sortInOrder(e: ISortDirectiveEvent<IPlayer[]>): IPlayer[] {
    this._setCheckedInOrder(e);
    return this._setSortInOrder(e);
  }

  public search (model: IPlayer[], searchValue: string): IPlayer[] {
    const filtered: IPlayer[] = model.filter((player: IPlayer): boolean => {
      return player.name.toLowerCase().search(searchValue) !== -1;
    });

    return filtered;
  }

  private _setSortInOrder(e: ISortDirectiveEvent<IPlayer[]>): IPlayer[] {
    let sortedInOrder: IPlayer[];

    if(e.filtered.length) {
      sortedInOrder = this._setFilteredOnCheck(e)
    } else {
      sortedInOrder = this._removeUnCheckedFilter(e);
    }

    return sortedInOrder;
  }

  private _setCheckedInOrder(e: ISortDirectiveEvent<IPlayer[]>): void {
    const order: number = Number(PlayerFilter[e.field.value.toUpperCase()]);
    const index: number = this._checkedInOrder.indexOf(e.field.value.toLowerCase());

    if(index === -1) {
      // Adds empty slots in the array - clear them or implement alternative solution
      this._checkedInOrder[order] = (e.field.value.toLowerCase());
    } else if(index !== -1) {
      this._checkedInOrder.splice(index, 1);
    }
  }

  private _setFilteredOnCheck(e: ISortDirectiveEvent<IPlayer[]>): IPlayer[] {
    this._checkedInOrder.forEach((filter: string): void => {
      if (filter === e.field.value) {
        this._filtered.push(...e.filtered);
      }
    });

    return this._filtered;
  }

  private _removeEmptySlotsFromCollection(): void {
    this._checkedInOrder = this._checkedInOrder.filter((): boolean => {
      return true;
    });
  }

  private _removeUnCheckedFilter(e: ISortDirectiveEvent<IPlayer[]>): IPlayer[] {
    this._removeEmptySlotsFromCollection();
    return this._removeOnUncheck(e);
  }

  private _removeOnUncheck(e: ISortDirectiveEvent<IPlayer[]>): IPlayer[] {
    if (this._checkedInOrder.length) {
      this._checkedInOrder.forEach((): void => {
        this._filtered = this._filtered.filter((player: IPlayer): boolean => {
          return e.field.value.toLowerCase() !== player.position.toLowerCase();
        });
      })
    } else {
      this._filtered = [];
    }

    return this._filtered;
  }
}
