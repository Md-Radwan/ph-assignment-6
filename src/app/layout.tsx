import type { Metadata } from "next";
import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import LibraryProvider from "@/context/LibraryContext";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness App",
  description: "Stay Fit Stay Healthy",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col">
        <LibraryProvider>
          <Navbar />
          <div>{children}</div>
          <Footer/>
          <ToastContainer />
        </LibraryProvider>
      </body>
    </html>
  );
}
