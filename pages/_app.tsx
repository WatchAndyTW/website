import { AppProps } from "next/app";
import { ReactElement, useState } from "react";
import { Inter, Noto_Sans_TC } from "@next/font/google";
import { AdsenseContext } from "@ads/adsense";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import "nextra-theme-docs/style.css";
import "../styles/global.css";

export const noto = Inter({
    variable: "--font-noto",
    preload: true,
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
    // this will cause the whole page being rerendered
    // TODO: replace with global states using libraries
    const [status, setAdsStatus] = useState<"ok" | "error">("ok");

    return (
        <>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1801171681307308"
                crossOrigin="anonymous"
                strategy="lazyOnload"
                onError={() => setAdsStatus("error")}
            />
            <Analytics />
            <style jsx global>{`
                html {
                    --font-noto: ${noto.style.fontFamily};
                    font-weight: 700;
                }
            `}</style>
            <AdsenseContext.Provider
                value={{
                    status,
                }}
            >
                <Component {...pageProps} />
            </AdsenseContext.Provider>
        </>
    );
}
