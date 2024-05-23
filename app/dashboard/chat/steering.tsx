"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import Heatmap from "./_components/test-chart";
import ChatSkeleton from "./_components/chat-skeleton";
import { Suspense } from "react";
import { complete } from "@/app/api/ndif/completions";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Textarea } from "@/components/ui/textarea";
import { CollapsibleDemo } from "./_components/steering-dropdown";

interface Message {
    id: number;
    name: string;
    positive: string;
    negative: string;
}

export default function Steering() {
    const [messages, setMessages] = React.useState<Message[]>([
        { id: 1, name: "", positive: "", negative: "" },
    ]);

    const [completion, setCompletion] = React.useState("");

    const addTurn = () => {
        setMessages([
            ...messages,
            { id: messages.length + 1, name: "", positive: "", negative: "" },
        ]);
    };

    const deleteLastTurn = () => {
        setMessages((prevMessages) => {
            if (prevMessages.length <= 1) return prevMessages; // Don't delete the initial system prompt
            return prevMessages.slice(0, -1);
        });
    };

    const fetchCompletion = async () => {
        return "some result";
    };

    const generateJSON = () => {
        return "some json";
    };

    const updateMessage = (id: number, newMessage: Partial<Message>) => {
        setMessages((prevMessages) =>
            prevMessages.map((message) =>
                message.id === id ? { ...message, ...newMessage } : message
            )
        );
    };

    return (
        <ResizablePanelGroup direction="horizontal" className="p-4 space-x-4 h-full">
            <ResizablePanel className="max-h-[80vh] overflow-hidden flex-1">
                <ScrollArea className="h-full pr-2">
                    <div className="grid gap-4 pb-4">
                        <Textarea
                            className="w-full"
                            placeholder="Prompt"
                        />
                        {messages.map((message) => (
                            <div key={message.id} className="mb-4">
                                <CollapsibleDemo message={message} updateMessage={updateMessage} />
                            </div>
                        ))}
                        <div className="flex gap-2 pb-4">
                            <Button onClick={fetchCompletion}>
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Submit
                            </Button>
                            <Button onClick={addTurn} variant="ghost">
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Add Vector
                            </Button>

                            <Button onClick={deleteLastTurn} variant="ghost">
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Delete Vector
                            </Button>
                        </div>
                    </div>
                </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="p-4 rounded-md border bg-muted h-full">
                <div className="mt-[5px] min-h-[400px] lg:min-h-[700px]">
                    <Suspense fallback={<ChatSkeleton />}>
                        {completion}
                    </Suspense>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
