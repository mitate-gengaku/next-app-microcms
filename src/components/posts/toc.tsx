"use client"

import { IBlock } from "@/types/block"
import { cn } from "@/utils/cn"
import Link from "next/link"

export const Toc = ({ blocks, current, y }: {blocks: IBlock[], current: number, y: number }) => {
  return (
    <nav
      className="fixed hidden md:block md:min-w-36 lg:min-w-64 right-[calc(2rem+10%)] top-[196px]"
      style={{  
        top: 196 - y > 60 ? 196 - y : 60
      }}
      >
      <h3 className="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">目次</h3>
      <ol 
        className={cn(
          "pl-4 text-sm",
        )}
        > 
        {blocks.map((block, i) => (
          <li
            className={cn(
              "py-1 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-800 transition-all list-disc font-semibold",
              i === current && "text-gray-800 dark:text-gray-200 marker:text-teal-500"
            )}
            key={`${block.text}-${i}`}
            >
            <Link
              href={`#${block.id}`}
              >
              {block.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}