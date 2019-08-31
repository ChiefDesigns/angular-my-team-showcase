import {
  Directive,
  ElementRef, EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {IPlayer} from "../../../player/interfaces/player.interface";
import {ISortDirective, ISortDirectiveEvent, ISortDirectiveModel} from "./interfaces/sort.directive.interface";

@Directive({
  selector: '[appSort]'
})
export class SortDirective implements ISortDirective<any>{
  @Input()
  public model: ISortDirectiveModel<any>;
  @Input()
  public field: string;
  @Input()
  public fieldValue: string;

  @Output()
  public onSort: EventEmitter<ISortDirectiveEvent<any>> = new EventEmitter<ISortDirectiveEvent<any>>();

  private _elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
    this._elementRef = elementRef;
  }

  @HostListener('change') onCheckbox() {
    const filtered: any = this._sortOnToggle();

    this.onSort.emit({
      filtered,
      isChecked: this._elementRef.nativeElement.checked,
      field: {
        name: this.field,
        value: this.fieldValue
      }
    });
  }

  private _sortOnToggle(): any {
    let filtered: any;
    if (this._elementRef.nativeElement.checked) {
      filtered = this.model.collection.filter((item: any): any => {
        if (item[this.field]) {
          return this.fieldValue.toLowerCase() === item[this.field].toLowerCase();
        }
      });
    } else {
      filtered = [];
    }

    return filtered;
  }
}
