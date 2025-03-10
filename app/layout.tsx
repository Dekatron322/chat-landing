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
