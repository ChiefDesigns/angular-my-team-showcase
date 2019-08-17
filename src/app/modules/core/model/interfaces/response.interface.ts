export interface IApiResponse {
    address: string;
    area: {
        id: number;
        name: string;
    };
    clubColors: string;
    crestUrl: string;
    email: string;
    founded: number;
    id: number;
    lastUpdated: string;
    name: string;
    phone: string;
    shortName: string;
    squad: any[];
    tla: string;
    venue: string;
    website: string;
}