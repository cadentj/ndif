

import * as React from "react"


import { Metadata } from "next"
import Image from "next/image"
import { CounterClockwiseClockIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

import { MaxLengthSelector } from "./_components/maxlength-selector"
import { ModelSelector } from "./_components/model-selector"
import { ModeSelector } from "./_components/mode-selector"
import { TemperatureSelector } from "./_components/temperature-selector"
import { TopPSelector } from "./_components/top-p-selector"
import { models, types } from "./_data/models"

import MessageBuilder from "./console"
import CompletionIcon from "./_components/completion-icon"
import EditIcon from "./_components/edit-icon"


import { Model } from "./_data/models"
import { modes } from "./_data/modes"


export const metadata: Metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
}

export default function PlaygroundPage() {

  

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/playground-light.png"
          width={1280}
          height={916}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/playground-dark.png"
          width={1280}
          height={916}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-col md:flex">
        <Tabs defaultValue="edit" className="flex-1">
          <div className="container h-full py-6">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
              <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                <div className="grid gap-2">
                  <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Mode
                  </span>
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="edit">
                      <span className="sr-only">Edit</span>
                      <EditIcon />
                    </TabsTrigger>
                    <TabsTrigger value="complete">
                      <span className="sr-only">Complete</span>
                      <CompletionIcon />
                    </TabsTrigger>
                  </TabsList>
                </div>
                <ModeSelector modes={modes}/>
                <ModelSelector types={types} models={models}/>
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </div>
              <div className="flex-1 md:order-1">
                <TabsContent value="complete" className="mt-0 border-0 p-0">
                  <div className="flex h-full flex-col space-y-4">
                    <Textarea
                      placeholder="Write a tagline for an ice cream shop"
                      className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
                    />
                    <div className="flex items-center space-x-2">
                      <Button>Submit</Button>
                      <Button variant="secondary">
                        <span className="sr-only">Show history</span>
                        <CounterClockwiseClockIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="edit" className="mt-0 border-0 p-0">
                  <MessageBuilder />
                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  )
}
