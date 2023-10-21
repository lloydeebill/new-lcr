'use client'

import React from "react";
import CertifyAndConsent from '@/components/Consent';

const RequestColB= () => {
  const title = "Request PSA Copy: Certificate of Live Birth";
  const link = "https://forms.gle/Y4DWbeDehKLyomrq9";

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

export default RequestColB;
