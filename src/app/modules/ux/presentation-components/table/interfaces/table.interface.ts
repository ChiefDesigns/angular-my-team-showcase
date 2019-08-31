export interface ITableComponent {
    config: ITableConfig;
    playerImagePlaceholder: string;
}

export interface ITableConfig {
    header: ITableConfigHeader;
    body: ITableConfigBody;
}

export interface ITableConfigHeader extends ITableItems<ITableConfigHeaderItem[]> {}

export interface ITableConfigBody extends ITableItems<ITableConfigBodyItem[]> {}

export interface ITableItems<T> {
    items: T;
}

export interface ITableConfigHeaderItem {
    action?: () => void;
    text: string;
    fieldId?: string;
}

export interface ITableConfigBodyItem {
    value: string;
    data: any;
}

