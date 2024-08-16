import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Nancy O. | Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
          {`
            .dropdown:hover .dropdown-menu {
              display: block;
            }
          `}
        </style>
      </Head>

      <body className='bg-red-100 font-mono'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      
    </html>
  );
}
