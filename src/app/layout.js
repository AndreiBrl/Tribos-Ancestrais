import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

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
        url: "https://andreibarbuto.vercel.app/img/capaEdit.png",
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
      <Head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-NRE6FBE7VZ`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NRE6FBE7VZ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
