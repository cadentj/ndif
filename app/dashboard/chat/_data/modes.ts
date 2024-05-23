export interface Mode<Type = string> {
    name: Type;
    description: string;
}

export const modes: Mode[] = [
    {
        name: "Chat Completion",
        description:
            "Chat Completion is a mode that allows you to interact with the model in a conversational way. You can ask questions, provide context, and have a back-and-forth conversation with the model.",
    },
    {
        name: "Logit Lens",
        description:
            "Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    },
    {
        name: "Steering",
        description:
            "Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    },
    {
        name: "Attribution",
        description:
            "Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    },
];