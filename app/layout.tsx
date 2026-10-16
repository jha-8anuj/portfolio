import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anujkumar Jha | Full Stack Developer",
  description: "Portfolio of Anujkumar Jha — Java backend and full stack developer building APIs and modern web applications.",
  openGraph: {
    title: "Anujkumar Jha | Full Stack Developer",
    description: "Java backend and full stack developer building dependable digital products.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
