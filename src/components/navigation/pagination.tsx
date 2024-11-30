/**
 * UIのみ
 */

"use client"

import { ChevronLeft, ChevronRight } from "@medusajs/icons"
import { Button } from "@medusajs/ui"

export const Pagination = () => {
  return (
    <nav className="flex justify-center items-center">
      <ul className="flex justify-center items-center gap-2">
        <li>
          <Button variant="secondary" className="size-8 p-2 flex justify-center items-center">
            <ChevronLeft />
          </Button>
        </li>
        <li>
          <Button
            variant="secondary"
            className="bg-teal-500 text-teal-50"
            >1</Button>
        </li>
        <li>
          <Button variant="secondary">2</Button>
        </li>
        <li>
          <Button variant="secondary">3</Button>
        </li>
        <li>
          <Button variant="secondary" className="size-8 p-2 flex justify-center items-center">
            <ChevronRight />
          </Button>
        </li>
      </ul>
    </nav>
  )
}