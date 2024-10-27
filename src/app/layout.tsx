import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/**
 * @note
 * When using Next.js version **15.0.1** with **Turbopack** for development,
 * removing the Google Fonts in `layout.tsx` causes **Tailwind CSS** to stop processing styles.
 * This issue is **exclusive to Safari and Safari Technology Preview** browsers.
 * The problem does not occur when:
 * - Using Turbopack is disabled.
 * - Google Fonts are included.
 * - Accessing the application through other browsers like Chrome, Firefox, or Opera.
 */

// >>>>>>>>>>>>>>>>>>>>>>>> Uncomment this to see the error in Safari

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
