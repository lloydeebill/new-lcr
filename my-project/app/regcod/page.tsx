'use client'

import React from "react";
import CertifyAndConsent from '@/components/Consent';

const RegCoD= () => {
  const title = "Register Certificate of Death";
  const link = "https://forms.gle/MHiuWDEyVX6Hs97F9";

  return (
    <main className="overflow-hidden">
      <CertifyAndConsent
        title={title}
        link={link}
      />

      ...
    </main>
  )
};

export default RegCoD;
