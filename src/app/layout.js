import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextGen Technology - Transforming Ideas into Digital Solutions",
  description: "Specializing in premium web development, SaaS solutions, mobile applications, and creative UI/UX design.",
  keywords: "NextGen Technology, Web Development, SaaS, UI/UX Design, App Development, Next.js",
  authors: [{ name: "NextGen Tech Team" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
