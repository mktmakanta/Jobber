import Navbar from "@/components/NavBar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Jobber website",
  description: " Search for your dream job at jobber",
};

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar />

          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </SessionProvider>
  );
}
