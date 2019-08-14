import {Injectable} from '@angular/core';
import { MyTeamApi } from '../api/my-team-api';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import {ModelInstance} from "./model-instance/model-instance";

@Injectable()
export class MyTeamModel {
  private _api: MyTeamApi;

  constructor(api: MyTeamApi) {
    this._api = api;
  }

  public get(url): Observable<any> {
    return this._api.get(url).pipe(map((response: any): any => {
      const assignedModel = Object.assign(this, response);
      const modelInstance = new ModelInstance(assignedModel)

      return modelInstance;
    }))
  }
}