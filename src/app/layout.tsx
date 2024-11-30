import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme/provider";

import { ThemeTrigger } from "@/components/theme/trigger";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeTrigger />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout