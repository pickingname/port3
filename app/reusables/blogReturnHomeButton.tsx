import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BlogReturnHomeButton() {
  return (
    <div>
                    <div className="pb-8">
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/70 transition-colors duration-150 ease-in-out"
                >
                  <Undo2 className="w-5 h-5 mr-2" />
                  return to home
                </Link>
              </div>
            </div>
    </div>
  )
}
