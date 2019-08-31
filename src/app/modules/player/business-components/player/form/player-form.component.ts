import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFormConfig} from "../../../../forms/form/interfaces/form.component.interface";
import {IPlayer} from "../../../interfaces/player.interface";
import {PlayerFormService} from "../../../services/form/player-form.service";
import {ISortDirectiveEvent} from "../../../../ux/directives/sort/interfaces/sort.directive.interface";
import {IPlayerForm, IPlayerFormConfig} from "./interfaces/player-form.interface";

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements IPlayerForm {
  @Input()
  public formConfig: IFormConfig;
  @Input()
  public filterConfig: IPlayerFormConfig;

  @Output()
  public onSort: EventEmitter<IPlayer[]> = new EventEmitter<IPlayer[]>(null);

  private _playerFormService: PlayerFormService;

  constructor(playerFormService: PlayerFormService) {
    this._playerFormService = playerFormService;
  }

  public onPlayerSort(e: ISortDirectiveEvent<IPlayer[]>): void {
    this.filterConfig.listSubject.next(this._playerFormService.sortInOrder(e));
    this.onSort.emit();
  }

  public onKeyUp(event: any): void {
    const searchValue: string = event.target.value;
    const result: any = this._playerFormService.search(this.filterConfig.sortModel.collection, searchValue);

    this.filterConfig.listSubject.next(result);
    this.onSort.emit()
  }
}
