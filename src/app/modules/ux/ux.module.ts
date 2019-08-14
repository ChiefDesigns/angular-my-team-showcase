import {NgModule} from "@angular/core";
import {InfoGridComponent} from "./info-grid/info-grid.component";
import {CommonModule} from "@angular/common";
import {CardComponent} from "./card/card.component";

@NgModule({
    declarations: [
        CardComponent,
        InfoGridComponent,
    ],
    exports: [
        CardComponent,
        InfoGridComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class UxModule {}