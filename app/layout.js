import localFont from "next/font/local";
import "./globals.css";
import { Lexend_Deca } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { AuthProvider } from "@/Provider";

const lexendeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-lexend-deca",
});
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700"],
  variable: "--font-dm-sans",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FM E-Portal",
  description: "Student-Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexendeca.variable}  ${DmSans.variable} antialiased`}
      >
        <AuthProvider> {children}</AuthProvider>
      </body>
    </html>
  );
}
