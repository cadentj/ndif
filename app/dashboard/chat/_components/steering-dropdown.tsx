// components/_components/steering-dropdown.tsx

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";

import { Slider } from "@/components/ui/slider";

import  { CaretSortIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

import { Message } from "../_modes/steering";

interface CollapsibleDemoProps {
    message: {
        id: number;
        name: string;
        positive: string;
        negative: string;
    };
    updateMessage: (id: number, newMessage: Partial<Message>) => void;
}

export function CollapsibleDemo({ message, updateMessage }: CollapsibleDemoProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        updateMessage(message.id, { [field]: e.target.value });
    };

    return (
        <Collapsible className=" space-y-2">
        
            <div className="flex items-center justify-between space-x-4">
                <h4 className="text-sm font-semibold">
                    {message.name ||"Steering Vector"}
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <CaretSortIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <Slider
                defaultValue={[50]}
                max={100}
                step={1}
            />
            <CollapsibleContent>
                <div className="space-y-2">
                    <Input
                        value={message.name}
                        onChange={(e) => handleChange(e, "name")}
                        placeholder="Name"
                    />
                    <Textarea
                        value={message.positive}
                        onChange={(e) => handleChange(e, "positive")}
                        placeholder="Positive"
                    />
                    <Textarea
                        value={message.negative}
                        onChange={(e) => handleChange(e, "negative")}
                        placeholder="Negative"
                    />
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}