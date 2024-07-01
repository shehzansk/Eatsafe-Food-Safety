import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EatSafe - Ensure Food Safety",
  description: "Ensure your food is safe to consume. Enter a food or food product name below and get a detailed safety analysis and rating.",
  icons: {
    icon: ['/favicon.ico?v=4']
  },
  robots: "index, follow",
  author: "Shehzan Sheikh",
  keywords: "food safety, check food safety, food analysis, food rating",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
