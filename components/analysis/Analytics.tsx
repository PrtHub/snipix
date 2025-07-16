"use client";

import Script from "next/script";

export function Analytics() {
  return (
    <>
      <Script id="lemon-squeezy">{`window.lemonSqueezyAffiliateConfig = { store: "snipix" };`}</Script>
      <Script src="https://lmsqueezy.com/affiliate.js" defer></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NW7W2KN9KF`}
      />
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NW7W2KN9KF');
        `}
      </Script>
    </>
  );
} 