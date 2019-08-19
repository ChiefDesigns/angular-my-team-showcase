import {Component, Input, OnInit} from '@angular/core';
import {ITableComponent, ITableConfig, ITableConfigHeaderItem} from "./interfaces/table.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements ITableComponent, OnInit {
  @Input()
  public config: ITableConfig;

  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

}
