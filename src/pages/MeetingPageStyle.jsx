import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dateFormat from "dateformat";
import { useParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import Pagination from "../components/Pagination";
import { useTranslation } from "react-i18next";

export default function MeetingsPageStyle({ apiData }) {
  const { t } = useTranslation();
  return (
    <section>
      <h1 style={{ color: "#0e2b65" }}>{t("yiginlar_")}</h1>
      <div className="newsPage_container">
        {apiData?.map((data) => (
          <Link
            to={`/meetingsDetail/${data.id}`}
            className="news_small"
            key={data.id}
          >
            <div className="news_content">
              <div className="news_small_img">
                <img src={data?.image} />
              </div>
              <div className="news_small_text">
                <div className="news_small_text_title">
                  <h3>{data?.title}</h3>
                </div>
              </div>
              <div className="news_flex_style">
                <div className="news_small_text_date">
                  <p>{dateFormat(data?.created_at, "dd.mm.yyyy")}</p>
                </div>
                <div className="news_button_style">
                  <button>{t("more_")}</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
