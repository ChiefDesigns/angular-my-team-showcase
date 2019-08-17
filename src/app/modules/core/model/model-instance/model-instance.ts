import {IModelInstance} from "./model-instance.interface";
import {AppModel} from "../app-model";
import {IApiResponse} from "../interfaces/response.interface";

export class ModelInstance implements IModelInstance {
    public attributes: any;
    public items: any;

    constructor(response: any) {
        this._assignModelInstance(response);
        // Object.assign(this, response);
    }


    public getResponse(): any {
        return this;
    }

    private _assignModelInstance(response: any): void {
        const {crestUrl, name, squad, venue} = response;

        this.attributes = {
            crestUrl,
            name,
            venue
        }

        this.items = squad
    }
}