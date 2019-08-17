import {Observable} from "rxjs";
import {ModelInstance} from "../../../core/model/model-instance/model-instance";

export interface IPlayerService {
    getPlayers(url: string): Observable<ModelInstance>;
}