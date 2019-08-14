import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { MyTeamApi } from './api/my-team-api';
import { MyTeamModel } from './model/my-team-model';

@NgModule(
    {
      declarations: [],
      imports: [HttpClientModule],
      providers: [
        MyTeamApi,
        MyTeamModel,
      ],
    }
)
export class CoreModule {}