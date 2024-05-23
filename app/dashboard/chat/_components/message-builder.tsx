"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import Heatmap from "./test-chart";
import ChatSkeleton from "./chat-skeleton";
import { Suspense } from "react";
import { complete } from "@/app/api/ndif/completions";

interface Message {
    id: number;
    role: string;
    text: string;
}

export default function MessageBuilder() {
    const [messages, setMessages] = React.useState<Message[]>([
        { id: 1, role: "system", text: "System Prompt" },
    ]);
    const [completion, setCompletion] = React.useState("");

    const addTurn = () => {
        setMessages([
            ...messages,
            { id: messages.length + 1, role: "user", text: "" },
            { id: messages.length + 2, role: "assistant", text: "" },
        ]);
    };

    const handleChange = (id: number, text: string) => {
        setMessages((prevMessages) =>
            prevMessages.map((message) =>
                message.id === id ? { ...message, text } : message
            )
        );
    };

    const fetchCompletion = async () => {
        const messages = generateJSON();
        const prompt = messages[messages.length - 1].content;
        console.log(prompt)
        const result = await complete(prompt);
        setCompletion(result);
    };

    const generateJSON = () => {
        const structuredData = messages.map(({ role, text }) => ({
            role,
            content: text,
        }));
        return structuredData;
    };

    return (
        <ResizablePanelGroup direction="horizontal" className="p-4 space-x-4">
            <ResizablePanel className="max-h-[80vh] overflow-y-auto">
                <div className="grid gap-4">
                    {messages.map((message) => (
                        <Textarea
                            key={message.id}
                            className="w-full"
                            placeholder={message.role}
                            value={message.text}
                            onChange={(e) =>
                                handleChange(message.id, e.target.value)
                            }
                        />
                    ))}
                    <div className="flex gap-2">
                        <Button onClick={addTurn} variant="ghost">
                            <PlusCircledIcon className="mr-2 h-4 w-4" />
                            Add Turn
                        </Button>
                        <Button onClick={fetchCompletion} variant="ghost">
                            <PlusCircledIcon className="mr-2 h-4 w-4" />
                            Submit
                        </Button>
                    </div>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="p-4 rounded-md border bg-muted">
                <div className="mt-[5px] min-h-[400px] lg:min-h-[700px]">
                    <Suspense fallback={<ChatSkeleton />}>
                        {completion}
                    </Suspense>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
