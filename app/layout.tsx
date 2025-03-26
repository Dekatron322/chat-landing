import "styles/tailwind.css"
import { Metadata } from "next"
import ThemeProviders from "components/ProvidersComponents/ThemeProviders"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chats",
  description:
    "CHATS transforms the future of humanitarian efforts with verifiable solutions for cash and voucher aid. Our platform enhances donor confidence and enables NGOs to deliver impactful, transparent campaign",
  icons: {
    icon: [
      // Basic favicon
      { url: "/chats transparent 1.png" },
      // New favicon for modern browsers
      { url: "/chats transparent 1.png", sizes: "16x16", type: "image/png" },
      { url: "/chats transparent 1.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      // Apple touch icon
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      // For other platforms
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://chat-landing-theta.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "#",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  )
}
