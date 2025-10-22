import localFont from "next/font/local"
import Sidebar from "./sidebar/sidebar";
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
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Student-Eportal",
  description: "Student-Eportal",
};

export default function RootLayout({ children }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${lexendeca.variable} ${DmSans.variable} antialiased flex min-h-screen`}
    >
      <main className=" flex justify-center items-center">
        <AuthProvider> {children}</AuthProvider>
      </main>
      <aside className="w-64">
        <Sidebar />
      </aside>
    </div>
  );
}
