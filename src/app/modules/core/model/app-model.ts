import {Injectable} from '@angular/core';
import { AppApi } from '../api/app-api';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import {ModelInstance} from "./model-instance/model-instance";
import {IApiResponse} from "./interfaces/response.interface";

@Injectable()
export class AppModel {
  private _appApi: AppApi;

  constructor(appApi: AppApi) {
    this._appApi = appApi;
  }

  public get(url): Observable<any> {
    return this._appApi.get(url).pipe(map((response: IApiResponse): any => {

      // const assignedModel = Object.assign(this, response);
      const modelInstance: ModelInstance = new ModelInstance(response);

      return modelInstance;
    }))
  }
}