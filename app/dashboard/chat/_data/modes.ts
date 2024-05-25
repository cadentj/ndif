export interface Mode<Type = string> {
    name: Type;
    description: string;
}

export const modes: Mode[] = [
    {
        name: "Chat Completion",
        description:
            "Interact with the model in a conversational way. You can ask questions, provide context, and have a back-and-forth conversation with the model.",
    },
    {
        name: "Steering",
        description:
            "Provide a prompt to the model to steer the conversation in a specific direction. This can be useful for generating content that is on-topic and relevant to a specific subject.",
    },
    {
        name: "Probing",
        description:
            "Ask the model a series of questions to probe its knowledge on a specific topic. This can be useful for testing the model's understanding of a subject or for generating content that is informative and accurate.",
    },
];