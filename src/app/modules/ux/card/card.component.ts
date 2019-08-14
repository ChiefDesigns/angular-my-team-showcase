import {Component} from "@angular/core";
import {ICardComponent} from "./card.interface";

@Component({
    selector: 'app-card',
    styleUrls: ['./card.component.scss'],
    templateUrl: './card.component.html'
})
export class CardComponent implements ICardComponent {
    prop: string;
}