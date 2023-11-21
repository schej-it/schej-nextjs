import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import "@/styles/globals.css"
import { DM_Sans } from "next/font/google"
import { PHProvider, PostHogPageview } from "./providers"
import { Suspense } from "react"

export const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className={dmSans.className}>
          <CssBaseline />
          {children}
        </body>
      </PHProvider>
    </html>
  )
}
