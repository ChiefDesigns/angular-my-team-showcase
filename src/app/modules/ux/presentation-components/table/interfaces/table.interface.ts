export interface ITableComponent {
    config: ITableConfig
}

export interface ITableConfig {
    header: ITableConfigHeader;
    body: ITableConfigBody;
}

export interface ITableConfigHeader {
    items: ITableConfigHeaderItem[];
}

export interface ITableConfigBody {
    items: any;
}

// Refactor: these two interfaces into one
export interface ITableConfigHeaderItem {
    action?: () => void;
    text: string;
    fieldId?: string;
}

export interface ITableConfigBodyItem {
    value: string;
    data: any;
}

