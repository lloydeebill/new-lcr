'use client'

import React from "react";
import CertifyAndConsent from '@/components/Consent';

const RequestCenodeath= () => {
  const title = "Request PSA Copy: Certificate of No Death";
  const link = "https://forms.gle/RZzjNLxovU833nXC8";

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

export default RequestCenodeath;
