import Navbar from "@/components/NavBar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Jobber website",
  description: " Search for your dream job at jobber",
};

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en" className={roboto.className}>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
