import React from "react";
import FeaturedWorkEnglishVersion from "./English";
import FeaturedWorkSpanishVersion from "./Spanish";

interface FeaturedWorkProps {
  language: string;
}

const FeaturedWork = ({ language }: FeaturedWorkProps) => {
  return (
    <>
      {language === "en" ? (
        <FeaturedWorkEnglishVersion />
      ) : (
        <FeaturedWorkSpanishVersion />
      )}
    </>
  );
};

export default FeaturedWork;
