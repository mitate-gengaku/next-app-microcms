'use client';

import { useTheme } from "@/hooks/use-theme";
import { ComputerDesktop, Moon, Sun } from "@medusajs/icons";
import { DropdownMenu } from "@medusajs/ui"
import { useEffect, useState } from "react";

export const ThemeTrigger = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const { theme, setLight, setDark, setSystem } = useTheme();

  useEffect(() => {
    setLoading(true)
  }, [])

  if (!isLoading) return <></>
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        className="focus:outline-none"
        >
        {theme === "light" && <Sun />}
        {theme === "dark" && <Moon />}
        {theme === "system" && <ComputerDesktop />}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="min-w-10 gap-2 flex flex-col">
        <DropdownMenu.Item
          onClick={() => setLight()}
          >
          <Sun />
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => setDark()}
          >
          <Moon />
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => setSystem()}
          >
          <ComputerDesktop /> 
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}