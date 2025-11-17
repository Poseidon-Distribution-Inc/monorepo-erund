import { Vehicle } from "./profile";

export type biddingStatusEnum = "pending" | "accepted" | "rejected" | "cancelled";
export interface IBidder {
  bidderId: string;
  bidderName: string;
  bidAmount: number;
  bidderNote?: string;
  bidderVehicle: Vehicle | "walking";
  status: biddingStatusEnum;
  isActive: boolean;
}

export interface IBiddingSchema {
    postId: string;
    posterId: string;
    transactionId?:string;
    bidders: IBidder[];
    selectedBidder?: string;
    status: biddingStatusEnum;
    isActive: boolean;
}
export interface IBidding extends IBiddingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

// export type biddingStatusEnum = "pending" | "accepted" | "rejected" | "cancelled";
// export interface IBiddingSchema {
//     postDetail: {
//         _id: string;
//     };
//     transactionId?:string;
//     bidderId: string;
//     bidderName:string;
//     biddingAmount: string;
//     bidderNote?:string;
//     status: biddingStatusEnum;
//     isActive: boolean;
// }
// export interface IBidding extends IBiddingSchema {
//     id: string;
//     createdAt: Date;
//     updatedAt: Date;
// }
