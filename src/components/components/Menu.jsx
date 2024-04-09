import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Menu({ title, link, subtitle }) {
  const { t } = useTranslation();
  return (
    <div className="menu_container">
      <p>
        <Link href="/">{t("boshpage_")}</Link>
      </p>
      <span>/</span>{" "}
      <p>
        <Link href={link}>{t(title)}</Link>
      </p>
      <span>/</span>{" "}
      <p className="page_name">
        <Link href="">{t(subtitle)}</Link>
      </p>
    </div>
  );
}
