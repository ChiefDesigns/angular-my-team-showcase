import { NgModule } from '@angular/core';
import {PlayerService} from "./services/player.service";
import {PlayerComponent} from "./business-components/player/player.component";
import {CommonModule} from "@angular/common";
import {PlayerInfoComponent} from "./presentation-components/player-info/player-info.component";
import {UxModule} from "../ux/ux.module";
import {AppFormsModule} from "../forms/forms.module";

@NgModule({
  declarations: [
      PlayerComponent,
      PlayerInfoComponent,
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
      PlayerService
  ]
})
export class PlayerModule {}