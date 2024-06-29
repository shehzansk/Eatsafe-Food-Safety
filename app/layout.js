import { Inter } from "next/font/google";
import "./globals.css";
import Index from "@/pages";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EatSafe",
  description: "web application to check the pros and cons of food, food products.",
  icons:{
    icon:['/favicon.ico?v=4']
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Index />
      </body>
    </html>
  );
}
