import {NgModule} from "@angular/core";
import {InfoGridComponent} from "./info-grid/info-grid.component";
import {CommonModule} from "@angular/common";
import {CardComponent} from "./card/card.component";
import { TableComponent } from './presentation-components/table/table.component';

@NgModule({
    declarations: [
        CardComponent,
        InfoGridComponent,
        TableComponent,
    ],
    exports: [
        CardComponent,
        InfoGridComponent,
        TableComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class UxModule {}