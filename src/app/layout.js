import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew Duc Nguyen",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
