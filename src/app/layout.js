import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew Duc Nguyen",
  description: "Portfolio site",
  icons: {
    icon: "/favicon.ico", // path inside /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=''>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
