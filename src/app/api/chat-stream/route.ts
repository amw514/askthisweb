import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextResponse } from "next/server";


export async function POST(req: NextResponse) {
    const {messages,sessionId} = await req.json();

    const lastMessage = messages[messages.length - 1].content;

    const response = await ragChat.chat(lastMessage,{sessionId,streaming:true});

    return aiUseChatAdapter(response);
};
