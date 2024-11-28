import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./Component/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "I will do this and get a job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
