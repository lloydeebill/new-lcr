'use client'

import React from "react";
import CertifyAndConsent from '@/components/Consent';

const RegColB= () => {
  const title = "Register Certificate of Live Birth";
  const link = "https://forms.gle/3FLc9J9PkQU1xpF58";

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

export default RegColB;
