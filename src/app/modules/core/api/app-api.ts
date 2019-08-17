import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class AppApi {
  private _http: HttpClient;

  constructor(httpClient: HttpClient) {
    this._http = httpClient;
  }

  public get(url: string): Observable<any> {
    // base headers can be configured here, other params can be passed in as options
    return this._http.get(url);
  }
}