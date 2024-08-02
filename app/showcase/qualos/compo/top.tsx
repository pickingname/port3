import React from 'react';
import { Separator } from "@/components/ui/separator";

export default function Intro() {
  return (
    <div className='pl-6'>
        <div className="flex h-5 items-center space-x-4 text-sm">
        <div>T1</div>
        <Separator orientation="vertical" />
        <div className='dark:text-neutral-400 text-neutral-400'>Introducing qualos</div>
        </div>
    </div>
  )
}
