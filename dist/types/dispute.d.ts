export interface IDisputeSchema {
    content: string;
    resolution?: string;
    adminComment?: string;
    resolveDate: Date;
    isActive: boolean;
}
export interface IDispute extends IDisputeSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIDisputeErrorResponse {
    error: string;
    code?: string;
}
interface APIDisputeSuccessResponse {
    message: string;
    data?: IDispute | IDispute[];
}
export type APIDisputeResponse = APIDisputeSuccessResponse | APIDisputeErrorResponse;
export interface APICreateDisputeRequest {
    dispute: Omit<IDisputeSchema, 'id' | 'resolveDate' | 'createdAt' | 'updatedAt'>;
}
export interface APIUpdateDisputeRequest {
    dispute: Partial<IDisputeSchema>;
}
export {};
