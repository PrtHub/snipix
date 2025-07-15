/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CodePreviewToggle } from "./code-preview-toggle";
import { Download } from "lucide-react";
import Image from "next/image";

interface MainContentHeaderProps {
  mode: "code" | "preview";
  setMode: (m: "code" | "preview") => void;
  onExport?: () => void;
}

const MainContentHeader = ({
  mode,
  setMode,
  onExport,
}: MainContentHeaderProps) => (
  <div className="relative flex h-16 items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-xl px-6 shadow-lg mb-6">
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-lg blur-sm" />
          <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <Image
              src="/logo.svg"
              alt="Snipix Logo"
              width={15}
              height={15}
              className="object-contain"
            />
          </div>
        </div>
        <h1 className="text-xl font-bold text-white drop-shadow-lg font-logo">
          Snipix
        </h1>
      </div>
    </div>
    <div className="flex items-center gap-4">
      {/* <a
        href="https://www.buymeacoffee.com/iPritam"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 flex items-center"
      >
        <img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=iPritam&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
          alt="Buy me a coffee"
          className="h-9 w-auto rounded shadow"
          style={{ display: "block" }}
        />
      </a> */}
      <CodePreviewToggle mode={mode} onModeChange={setMode} />
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          onClick={onExport}
          disabled={!onExport}
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  </div>
);

export default MainContentHeader;
