import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CoreModule } from './modules/core/core.module';
import {PlayerModule} from "./modules/player/player.module";
import {AppRoutingModule} from "./modules/routing/app-routing.module";
import {UxModule} from "./modules/ux/ux.module";
import {AppFormsModule} from "./modules/forms/forms.module";

@NgModule({
  imports:      [
    AppFormsModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    PlayerModule,
    AppRoutingModule,
    UxModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
