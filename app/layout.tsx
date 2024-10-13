import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "./(components)/top-navbar/topNav";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/css/all.css';
import MainNavBar from "./(components)/navBar/navBar";
import Container from 'react-bootstrap/Container';


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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <TopNav/>
        <MainNavBar/>
        {children}
      </body>
    </html>
  );
}