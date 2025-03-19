import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import ClientWrapper from "./(root)/_components/ClientWrapper";


export const metadata: Metadata = {
  title: "bhasha-hub",
  description: "Share and run code snippets",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col">
            <main className="flex-grow"> <ClientWrapper>{children}</ClientWrapper></main> {/* Add this */}
          <Footer />
        </body>
      </html>
  );
}