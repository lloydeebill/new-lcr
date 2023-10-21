import React, { useState } from "react";
import Image from 'next/image';
import CustomButton from "./CustomButton";

const CertifyAndConsent: React.FC<{
  title: string;
  link: string;
}> = ({ title, link }) => {
  const [isCertifiedAndConsented, setIsCertifiedAndConsented] = useState(false);

  const handleCertifyAndConsent = () => {
    setIsCertifiedAndConsented(true);

    // Route to the desired link
    window.location.href = link;
  };

  return (
    <div className='consent-style'>
      <div className='pt-16 px-4 sm:pt-24 md:pt-36 lg:pt-48 text-center items-center'>
        <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold py-6 sm:pb-2">CERTIFY & CONSENT</h1>
        <Image
          src="/consent.png"
          alt="consent"
          width={331}
          height={90}
          className='object-contain items-center mx-auto'
        />
        <h2 className="text-primary-blue text-3xl font-semibold italic">{title}</h2>
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-md shadow-2xl">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify leading-relaxed">
            By clicking the “I Consent and Certify” button, I fully understand that I am voluntarily providing personal and sensitive information to the Local Civil Registrar of Buenavista, Agusan del Norte which will exclusively use the information to process the Civil Registry document.
            <br />
            <br />
            I am giving the Office consent to communicate with me via voice call, text message, e-mail, or any online communication through the contact information that I will supply, provided that the communication will comply with the privacy laws and regulations.
            <br />
            <br />
            Further, I hereby certify that all information supplied is true and correct to my own knowledge and belief.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <CustomButton
          title="I Consent and Certify"
          containerStyles="text-2xl bg-primary-blue
          text-white rounded-full mt-10 items-center"
          handleClick={handleCertifyAndConsent}
        />
      </div>
    </div>
  );
};

export default CertifyAndConsent;
