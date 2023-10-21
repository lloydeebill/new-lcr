'use client'

import React from "react";
import CertifyAndConsent from '@/components/Consent';

const RequestCoD= () => {
  const title = "Request PSA Copy: Certificate of Death";
  const link = "https://forms.gle/WaNhrWezDcbY9v336";

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

export default RequestCoD;
