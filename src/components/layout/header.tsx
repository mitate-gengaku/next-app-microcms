"use client";

import Link from "next/link";
import {
  Ruwudu
} from "next/font/google"
import { cn } from "@/utils/cn";
import { ThemeTrigger } from "@/components/theme/trigger";

const ruwudu = Ruwudu({
  weight: ["400", "500"],
  subsets: ["latin"]
})

export const Header = () => {
  return (
    <header className="w-full font-noto-sans absolute top-0">
      <div className="w-full h-20 px-8 md:w-4/5 mx-auto flex items-center gap-8">
        <h1 className={cn(
          "text-3xl leading-0 mr-auto",
          ruwudu.className
          )}>
          <Link
            href={"/"}
            >
            Blog
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link
                href={"/posts"}
                className="hover:text-gray-500 dark:hover:text-gray-800 transition-all text-sm"
                >
                記事一覧
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeTrigger />
      </div>
    </header>
  )
}