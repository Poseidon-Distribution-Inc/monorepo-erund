export type ticketStatus = "open" | "close";

export interface ITicketSchema {
    title: string;
    content: string;
    status: ticketStatus;
    isActive: boolean;
}

export interface ITicket {
    id: string;
    createAt: Date;
    updatedAt: Date;
}
