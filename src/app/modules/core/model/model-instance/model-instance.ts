import {IModelInstance} from "./model-instance.interface";
import {MyTeamModel} from "../my-team-model";

export class ModelInstance implements IModelInstance {

    constructor(assignedModel: MyTeamModel) {
        Object.assign(this, assignedModel);
    }

    public getResponse(): any {
        return this;
    }
}