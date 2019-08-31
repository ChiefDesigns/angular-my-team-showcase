import { NgModule } from '@angular/core';
import {PlayerService} from "./services/player.service";
import {PlayerComponent} from "./business-components/player/player.component";
import {CommonModule} from "@angular/common";
import {PlayerInfoComponent} from "./presentation-components/player-info/player-info.component";
import {UxModule} from "../ux/ux.module";
import {AppFormsModule} from "../forms/forms.module";
import { PlayerFormComponent } from './business-components/player/form/player-form.component';
import {PlayerFormService} from "./services/form/player-form.service";
import { PlayerCardComponent } from './presentation-components/player-card/player-card.component';

@NgModule({
  declarations: [
      PlayerComponent,
      PlayerInfoComponent,
      PlayerFormComponent,
      PlayerCardComponent,
  ],
  exports: [
      PlayerComponent,
      PlayerInfoComponent,
  ],
  imports: [
      AppFormsModule,
      CommonModule,
      UxModule,
  ],
  providers: [
      PlayerService,
      PlayerFormService
  ]
})
export class PlayerModule {}