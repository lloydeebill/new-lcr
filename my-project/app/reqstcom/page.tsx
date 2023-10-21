'use client'

import React from "react";
import CertifyAndConsent from '@/components/Consent';

const RequestCoM= () => {
  const title = "Request PSA Copy: Certificate of Marriage";
  const link = "https://forms.gle/ms4TmYb6p4HC3PWJ8";

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

export default RequestCoM;
