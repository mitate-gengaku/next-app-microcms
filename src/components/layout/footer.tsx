"use client";

import { cn } from "@/utils/cn"
import { Ruwudu } from "next/font/google"
import Link from "next/link"

const ruwudu = Ruwudu({
  weight: ["400", "500"],
  subsets: ["latin"]
})

export const Footer = () => {
  return (
    <footer className="w-full font-noto-sans border-t bg-gray-700">
      <div className="w-full h-12 px-8 md:w-4/5 mx-auto flex items-center gap-8">
        <h1>
          <Link
            href={"/"}
            className={cn(
              "text-base leading-1 mr-auto text-gray-50",
              ruwudu.className
            )}
            >
            Blog
          </Link>
        </h1>
      </div>
    </footer>
  )
}