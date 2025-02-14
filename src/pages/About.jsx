import React, { useState, useEffect } from "react";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import Spinner from "../components/components/Spinner";
import Menu from "../components/components/Menu";
import Search from "../components/components/Search";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  let x = document.querySelector("title");
  x.textContent = "Biz haqimizda";

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.sahifalar);
    // console.log(response);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  // bu qism ishtirokchilar api lar bilan ishlash uchun
  const [apiData1, setApiData1] = useState();
  const fetchData1 = async () => {
    const response = await DataService.get(endpoints.ishtirokchilar);
    console.log(response, "ishtirokchi");
    setApiData1(response);
  };
  useEffect(() => {
    fetchData1();
  }, []);
  //apiData1

  return (
    <div className="container_full">
      <Menu title="about_" />
      {apiData ? (
        <div className="about_detail">
          {apiData?.results?.map((about) => (
            <div className="about_card">
              <div className="about_img">
                <img className="about_image" src={about.image} />
              </div>
              <div className="about_title">
                <h1>{about.title}</h1>
                {/* <span>({brYear} - {dyYear})</span> */}
                <div className="about_describtion">
                  <p dangerouslySetInnerHTML={{ __html: about.text }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}

      <h2>{t("participants")}</h2>
      {/* ishtirokchilar */}
      {apiData1 ? (
        <div className="cards">
          {apiData1?.results?.map((ishtirikchilar) => (
            <div key={ishtirikchilar.id} className="card card1">
              <div className="container2">
                <img src={ishtirikchilar.image} alt="las vegas" />
              </div>
              <div className="details">
                <h4>{ishtirikchilar.fullname}</h4>

                <p>{ishtirikchilar.position}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
