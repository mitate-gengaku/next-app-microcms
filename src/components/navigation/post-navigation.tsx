/**
 * UIのみ
 */
"use client"

import { ChevronLeft, ChevronRight } from "@medusajs/icons"
import {  Container } from "@medusajs/ui"
import Link from "next/link"

export const PostNavigationButton = () => {
  return (
    <ul className="flex justify-between items-center gap-4">
      <li className="w-64 md:w-80">
        <Link
          href={"/"}
          >
          <Container className="flex flex-wrap items-center hover:bg-gray-100 transition-all">
            <span className="mb-2 w-full text-xs font-medium text-teal-500 leading-none">前の投稿</span>
            <ChevronLeft className="mr-2 md:mr-4"/>
            <h4 className="text-sm">おりるをしたく</h4>
          </Container>
        </Link>
      </li>
      <li className="w-64 md:w-80">
        <Link 
          href={"/"}
          >
          <Container className="flex flex-wrap items-center hover:bg-gray-100 transition-all">
            <span className="mb-2 w-full text-right text-xs font-medium text-teal-500 leading-none">次の投稿</span>
            <h4 className="text-sm ml-auto">おりるをしたく</h4>
            <ChevronRight />
          </Container>
        </Link>
      </li>
    </ul>
  )
}