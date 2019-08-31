import {NgModule} from "@angular/core";
import {InfoGridComponent} from "./info-grid/info-grid.component";
import {CommonModule} from "@angular/common";
import {CardComponent} from "./card/card.component";
import { TableComponent } from './presentation-components/table/table.component';
import { SortDirective } from './directives/sort/sort.directive';

@NgModule({
    declarations: [
        CardComponent,
        InfoGridComponent,
        SortDirective,
        TableComponent,
    ],
    exports: [
        CardComponent,
        InfoGridComponent,
        SortDirective,
        TableComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class UxModule {}