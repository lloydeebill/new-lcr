'use client'

import React from "react";
import CertifyAndConsent from '@/components/Consent';

const RequestCenomar= () => {
  const title = "Request PSA Copy: Certificate of No Marriage";
  const link = "https://forms.gle/AifVi9Pg5JisV2C1A";

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

export default RequestCenomar;
