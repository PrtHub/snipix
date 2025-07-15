"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";

interface ExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: (filename: string) => void;
  isExporting: boolean;
}

export function ExportDialog({ isOpen, onClose, onExport, isExporting }: ExportDialogProps) {
  const [filename, setFilename] = useState("snipix-code");

  const handleExport = () => {
    if (filename.trim()) {
      onExport(filename.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isExporting) {
      handleExport();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white drop-shadow-lg">
            Export Image
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Choose a filename for your code snippet image.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="filename" className="text-sm font-medium text-white drop-shadow-lg">
              Filename
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 rounded-lg backdrop-blur-sm border border-white/10 shadow-2xl" />
              <Input
                id="filename"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter filename"
                className="relative z-10 bg-transparent border-transparent text-white placeholder:text-zinc-500 focus:border-white/40 pr-12"
                disabled={isExporting}
                autoFocus
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-400 z-20">
                .png
              </span>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isExporting}
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={handleExport}
            disabled={!filename.trim() || isExporting}
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            {isExporting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-2" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Export PNG
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}