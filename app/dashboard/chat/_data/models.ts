export const types = ["GPT-3", "Codex"] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
  name: string
  description: string
  type: Type
}

export const models: Model<ModelType>[] = [
  {
    name: "text-davinci-003",
    description:
      "Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    type: "GPT-3",
  },
  {
    name: "text-curie-001",
    description: "Very capable, but faster and lower cost than Davinci.",
    type: "GPT-3",
  },
  {
    name: "text-babbage-001",
    description: "Capable of straightforward tasks, very fast, and lower cost.",
    type: "GPT-3",
  },
  {
    name: "text-ada-001",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "GPT-3",
  },
  {
    name: "code-davinci-002",
    description:
      "Most capable Codex model. Particularly good at translating natural language to code. In addition to completing code, also supports inserting completions within code.",
    type: "Codex",
  },
  {
    name: "code-cushman-001",
    description:
      "Almost as capable as Davinci Codex, but slightly faster. This speed advantage may make it preferable for real-time applications.",
    type: "Codex",
  },
]
