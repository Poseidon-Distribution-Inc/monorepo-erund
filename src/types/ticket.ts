export type ticketStatus = "open" | "close";

export interface ITicketSchema {
    userId: string;
    title: string;
    content: string;
    status: ticketStatus;
    isActive: boolean;
}

export interface ITicket extends ITicketSchema {
    id: string;
    createAt: Date;
    updatedAt: Date;
}
