import {Component, Input, OnInit} from '@angular/core';
import {ITableComponent, ITableConfig, ITableConfigHeaderItem} from "./interfaces/table.interface";
import { playerImagePlaceholder } from '../../../../../assets/resources/placeholder';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements ITableComponent {
  @Input()
  public config: ITableConfig;

  public playerImagePlaceholder: string = playerImagePlaceholder;
}
