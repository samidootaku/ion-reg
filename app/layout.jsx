import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ION Registration",
  description: "Enjoy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body bg-cover bg-no-repeat`}>
        {children}
      </body>
    </html>
  );
}
