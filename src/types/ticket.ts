export type ticketStatus = "open" | "pending" | "close";
export type ticketUrgency = "low" | "medium" | "high" | "critical";

export interface ITicketSchema {
    userId: string;
    title: string;
    content: string;
    status: ticketStatus;
    urgency: ticketUrgency;
    photos?: {
        fileId: string;
        publicLink: string;
    }[];
    isActive: boolean;
}

export interface ITicket extends ITicketSchema {
    id: string;
    createAt: Date;
    updatedAt: Date;
}
