"use client";

import * as React from "react";

import { CodeViewer } from "./_components/code-viewer";
import { MaxLengthSelector } from "./_components/maxlength-selector";
import { ModelSelector } from "./_components/model-selector";
import { PresetSave } from "./_components/preset-save";
import { TemperatureSelector } from "./_components/temperature-selector";
import { TopPSelector } from "./_components/top-p-selector";
import { Separator } from "@/components/ui/separator";
import { Model, models, types } from "./_data/models";

import { ModeSelector } from "./_components/mode-selector";

import MessageBuilder from "./_modes/message-builder";
import Steering from "./_modes/steering";

import { fetchStats } from "@/app/api/ndif/stats";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";


import ChatSkeleton from "./_components/chat-skeleton";
import { Suspense } from "react";
import { modes, Mode } from "./_data/modes";

export default function PlaygroundPage() {
  const [selectedModel, setSelectedModel] = React.useState<Model>(models[0]);
  const [selectedMode, setSelectedMode] = React.useState<Mode>(modes[0]);
  const [completion, setCompletion] = React.useState("");

  const modeDict = {
    "Chat Completion": <MessageBuilder setCompletion={setCompletion} />,
    "Steering": <Steering setCompletion={setCompletion} />,
  };

  const StatsComponent: React.FC = () => {
    const stats = fetchStats();
    return <ModelSelector types={types} models={models} selectedModel={selectedModel} setSelectedModel={setSelectedModel} />;
  };

  return (
    <>
      <div className="w-full space-y-6 p-10 pb-16 min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Playground</h2>
          {/* <p className="text-muted-foreground">
            Experiment with different models and settings in the playground.
          </p> */}
        </div>

        {/* Separator */}
        <Separator className="my-6" />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0">
          {/* Content Area */}
          <div className="flex-1 flex flex-col">
            <ResizablePanelGroup direction="horizontal" className="flex-1 h-full">
              <ResizablePanel className="flex-1 overflow-hidden pr-2">
                {modeDict[selectedMode.name]}
              </ResizablePanel>

              <ResizableHandle withHandle />

              <ResizablePanel className="flex-1 p-4 rounded-md border bg-muted">
                <div className="min-h-[400px] lg:min-h-[500px] h-full">
                  {completion}
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>

          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-1/6 space-y-4 flex flex-col">
            <ModeSelector modes={modes} selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
            <Suspense fallback={<ChatSkeleton />}>
              <StatsComponent />
            </Suspense>
            <TemperatureSelector defaultValue={[0.56]} />
            <MaxLengthSelector defaultValue={[256]} />
            <TopPSelector defaultValue={[0.9]} />
            <PresetSave />
            <CodeViewer />
          </aside>
        </div>
      </div>
    </>
  );
}
