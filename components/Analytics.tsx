"use client";

import Script from "next/script";
import { useEffect } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXX";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-XXXXXXXXXX";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "000000000000000";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params || {});
}

export function Analytics() {
  useEffect(() => {
    const checkpoints = [25, 50, 75, 90];
    const reached = new Set<number>();

    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const depth = Math.round((window.scrollY / scrollable) * 100);
      checkpoints.forEach((checkpoint) => {
        if (depth >= checkpoint && !reached.has(checkpoint)) {
          reached.add(checkpoint);
          trackEvent("scroll_depth", { depth: checkpoint });
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        `}
      </Script>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
          gtag('config', '${ADS_ID}');
        `}
      </Script>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}
