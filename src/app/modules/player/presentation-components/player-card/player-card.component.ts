import {Component, Input, OnInit} from '@angular/core';
import {IPlayerCard, IPlayerCardConfig} from "./interfaces/player-car.interface";
import { playerImagePlaceholder } from 'src/assets/resources/placeholder';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements IPlayerCard, OnInit {
  @Input()
  public config: IPlayerCardConfig;

  public playerImagePlaceholder: string = playerImagePlaceholder;

  constructor() {}

  public ngOnInit(): void {}
}
