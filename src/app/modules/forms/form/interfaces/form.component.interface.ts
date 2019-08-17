export interface IFormConfig {
    model: IFormConfigModel;
    settings: IFormConfigSettings;
}

export interface IFormConfigModel {
    fields: IFormConfigModelField[];
}

export interface IFormConfigModelField {
    name: string;
    value: string | boolean;
}

export interface IFormConfigSettings {
    showActions: boolean;
}