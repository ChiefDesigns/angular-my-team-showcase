import {ISortDirectiveModel} from "../../../../../ux/directives/sort/interfaces/sort.directive.interface";
import {BehaviorSubject} from "rxjs";
import {IPlayer} from "../../../../interfaces/player.interface";
import {IFormConfig} from "../../../../../forms/form/interfaces/form.component.interface";

export interface IPlayerForm {
    formConfig: IFormConfig;
    filterConfig: IPlayerFormConfig;
}

export interface IPlayerFormConfig {
    sortModel: ISortDirectiveModel<IPlayer[]>,
    listSubject: BehaviorSubject<IPlayer[]>
}