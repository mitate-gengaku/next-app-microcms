"use client";

import { Input } from "@medusajs/ui"
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export const SearchForm = () => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null)

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    router.push(`/search?search=${ref.current?.value}`)
  }

  return (
    <form
      onSubmit={onSearch}
      className="w-full md:w-3/5 lg:w-2/5 mb-16 mx-auto"
      >
      <Input
        type="search"
        ref={ref}
        />
    </form>
  )
}