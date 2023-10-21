"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FeaturesSection = () => {
  const [features] = useState([
    {
      name: "Online",
      description: "We made our services online for you to access on your phone, computer, or tablet.",
      icon: "/online.svg",
    },
    {
      name: "Easy",
      description: "We made your experience easy and hassle-free. No need to visit our office for processing.",
      icon: "/relax.svg",
    },
    {
      name: "Notifies",
      description: "We make sure you're notified when your request is confirmed or ready for pick-up.",
      icon: "/call.svg",
    },
  ]);

  const [activeFeature, setActiveFeature] = useState("");
  const featureSectionRef = useRef<HTMLDivElement | null>(null); // Specify the type explicitly

  const handleFeatureClick = (featureName: string) => {
    setActiveFeature(activeFeature === featureName ? "" : featureName);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (featureSectionRef.current && !featureSectionRef.current.contains(event.target as Node)) {
      // Clicked outside the feature section, so close the active feature.
      setActiveFeature("");
    }
  };

  useEffect(() => {
    // Add a click event listener to the entire document to handle clicks outside the feature section.
    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener when the component unmounts.
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div ref={featureSectionRef} className="mt-12 padding-x padding-y" id="Features">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold justify-center">FEATURES </h1>
        <p className="text-2xl py-8 text-primary-blue italic">Tap each icon feature to learn more</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 md:p-12 bg-white rounded-lg flex flex-col items-center justify-center text-center ${
              activeFeature === feature.name ? "active-feature" : ""
            }`}
            onClick={() => handleFeatureClick(feature.name)}
          >
            <Image src={feature.icon} alt={`/${feature.name} Logo`} width={100} height={50} className={`object-contain ${activeFeature === feature.name ? "hidden" : ""}`} />
            <h2 className={`text-4xl font-semibold text-center py-3 md:py-5 ${activeFeature === feature.name ? "hidden" : ""}`}>{feature.name}</h2>
            {activeFeature === feature.name && <p className="text-center">{feature.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
