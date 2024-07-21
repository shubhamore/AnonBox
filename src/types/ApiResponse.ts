import { Message } from "@/model/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingResponse?: boolean;
    messages?: Array<Message>
}