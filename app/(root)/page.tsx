"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { MainContent } from "@/modules/main-area";
import { SidebarContent } from "@/modules/sidebar";

export default function Home() {

  return (
    <div className="h-screen w-full bg-background">
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        <ResizablePanel defaultSize={70} minSize={50}>
          <MainContent />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30} minSize={30} maxSize={40}>
          <SidebarContent />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
