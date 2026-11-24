import { GhibliShell } from "@/components/GhibliShell";
import { GhibliProvider } from "@/context/GhibliContext";
import type { Metadata } from "next";
import { Cinzel_Decorative, Nunito } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
	subsets: ["latin"],
	weight: ["700", "900"],
	variable: "--font-cinzel-decorative",
	display: "swap",
});

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["500", "700", "800"],
	variable: "--font-nunito",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://tribos-ancestrais.vercel.app"),
	title: "Tribos Ancestrais",
	description: "Escrito por Andrei Barbuto",
	openGraph: {
		images: [
			{
				url: "https://tribos-ancestrais.vercel.app/img/capaEdit.png",
				width: 800,
				height: 600,
				alt: "Imagem de Andrei Barbuto",
			},
		],
	},
};

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html translate="no" lang="pt-BR" className={`${cinzelDecorative.variable} ${nunito.variable}`}>
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-NRE6FBE7VZ" />
			<Script id="google-analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-NRE6FBE7VZ');
				`}
			</Script>
			<body>
				<GhibliProvider>
					<GhibliShell>{children}</GhibliShell>
				</GhibliProvider>
			</body>
		</html>
	);
}
