"use client";

import { useState } from "react";
import { DropDown, GlobLanguage } from "../svgs";

const LanguageDropdown = () => {
  // State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState("Engh");

  // Language options
  const languages = ["EN", "SPAn", "FR", "GER", "ITSL"];

  return (
    <div className="items-center text-sm flex">
      <div className="w-4 h-4">
        <GlobLanguage />
      </div>
      <select
        className="rounded-md appearance-none border-none outline-none bg-transparent cursor-pointer p-2"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang} className="bg-background p-4">
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
