import {EventEmitter} from "@angular/core";

export interface ISortDirective<T> {
    model: ISortDirectiveModel<T>;
    field: string;
    fieldValue: string;
    onSort: EventEmitter<ISortDirectiveEvent<any>>;
}
export interface ISortDirectiveModel<T> {
   collection: T;
}
export interface ISortDirectiveEvent<T> {
    filtered: T;
    isChecked: boolean;
    field: {
        name: string;
        value: string;
    }
}