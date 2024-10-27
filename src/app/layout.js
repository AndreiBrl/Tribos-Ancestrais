import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

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
  title: "Tribos Ancestrais",
  description: "Escrito por Andrei Barbuto",
  openGraph: {
    images: [
      {
        url: "https://www.tribosancestrais.com.br/img/capaEdit.png",
        width: 800,
        height: 600,
        alt: "Imagem de Andrei Barbuto",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html translate="no" lang="pt">
 
   {/* Google Analytics */}
   <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NRE6FBE7VZ"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NRE6FBE7VZ');
        `}
        </Script>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
