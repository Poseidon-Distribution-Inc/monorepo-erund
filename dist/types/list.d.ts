type ListStatus = 'published' | 'archived';
export interface IListSchema {
    listerId: string;
    listerName?: string;
    description: string;
    rate: number;
    location: {
        address: string;
        latitude?: number;
        longitude?: number;
        city?: string;
        district?: string;
        streetNumber?: string;
        street?: string;
        region?: string;
        subregion?: string;
        country?: string;
        postalCode?: string;
        name?: string;
        isoCountryCode?: string;
        timezone?: string;
        formattedAddress?: string;
    };
    status: ListStatus;
    photos?: {
        fileId: string;
        publicLink: string;
    };
    isActive: boolean;
}
export interface IList extends IListSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIListErrorResponse {
    error: string;
}
interface APIListSuccessResponse {
    mesage: string;
    data: IList | IList[];
}
export type APIListResponse = APIListSuccessResponse | APIListErrorResponse;
export interface APICreateListRequest {
    lists: IList;
}
export interface APIUpdateListRequest {
    list: Partial<IList>;
}
export {};
