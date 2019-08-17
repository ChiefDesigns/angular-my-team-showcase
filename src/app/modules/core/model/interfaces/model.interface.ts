import {Observable} from "rxjs";

export interface IAppModel {
    get(url): Observable<any>;
}