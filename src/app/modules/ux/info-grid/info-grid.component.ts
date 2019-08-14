import {Component, Input} from "@angular/core";
import {IInfoGridConfig} from "./info-grid.interface";

@Component({
    selector: 'app-info-grid',
    styleUrls: ['./info-grid.component.scss'],
    templateUrl: './info-grid.component.html'
})
export class InfoGridComponent {
    @Input()
    public config: IInfoGridConfig;

    public ngOnInit(): void {
    }
}
