'use client'

import React from "react";
import CertifyAndConsent from '@/components/Consent';

const ApplicationML= () => {
  const title = "Application of Marriage License";
  const link = "https://www.facebook.com/";

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

export default ApplicationML;
