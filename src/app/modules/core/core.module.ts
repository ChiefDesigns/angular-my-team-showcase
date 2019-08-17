import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppApi } from './api/app-api';
import { AppModel } from './model/app-model';

@NgModule(
    {
      declarations: [],
      imports: [HttpClientModule],
      providers: [
        AppApi,
        AppModel,
      ],
    }
)
export class CoreModule {}