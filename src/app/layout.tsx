import "@/app/globals.css"
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme/provider";
import { cn } from "@/utils/cn";
import { Noto_Sans_JP } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import ReactLenis from "lenis/react";

interface Props {
  children: React.ReactNode;
}

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const Layout = ({ children }: Props) => {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.className,
          NotoSansJP.variable,
          "select-none"
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactLenis
            root
            options={{ lerp: 0.1, duration: 2 }}
            >
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout