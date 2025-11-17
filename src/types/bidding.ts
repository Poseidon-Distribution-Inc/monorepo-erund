export type biddingStatusEnum = "pending" | "accepted" | "rejected" | "cancelled";
export interface IBiddingSchema {
    postDetail: {
        _id: string;
    };
    transactionId?:string;
    bidderId: string;
    bidderName:string;
    biddingAmount: string;
    bidderNote?:string;
    bidderVehicle?:string;
    status: biddingStatusEnum;
    isActive: boolean;
}
export interface IBidding extends IBiddingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
