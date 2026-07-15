import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Siddharth Transport | Reliable Logistics & Hyba Services in Odisha",
  description: "Computer Science student specializing in building scalable systems with precision and logic. Explore projects in full-stack development, DSA, and secure applications.",
  icons: {
    icon: "/site-logo.png",
    shortcut: "/site-logo.png",
    apple: "/site-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <ViewTransitions>
            <ClientLayout>{children}</ClientLayout>
          </ViewTransitions>
        </body>
      </ThemeProvider>
    </html>
  );
}
