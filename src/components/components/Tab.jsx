import React from "react";
import { useTranslation } from "react-i18next";

export default function Tab({ tablist, onChange, active }) {
  const { t } = useTranslation();
  return (
    <div className="tabs">
      <div className="tab_navbar">
        {tablist.map((tab) => (
          <button
            key={tab.id}
            className={tab.id == active ? "active" : ""}
            onClick={() => onChange(tab.id)}
          >
            {t(tab.title)}
          </button>
        ))}
      </div>
    </div>
  );
}
