'use client';

import { Clipboard } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export default function CopyButton({ text }: { text: string }) {
  const onCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard');
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onCopy}
            className='text-slate-50 absolute p-2 right-0 top-0'
          >
            <Clipboard className='size-4' />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy code</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
