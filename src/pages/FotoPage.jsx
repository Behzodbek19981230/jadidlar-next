import React, { useEffect, useState } from "react";
import Menu from "../components/components/Menu";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";

export default function FotoPage() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.foto);
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = "Ko'r-Eshit-O'qi / Suratlar";
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  return (
    <div className="foto_page_container">
      <Menu title="suratlar_" />
      <div className="foto-card-cont">
        {apiData?.results.map((item) => (
          <div
            className="card-fotoPage"
            key={item.id}
            onClick={() => navigate(`/suratlar/${item.id}`)}
          >
            <div className="card_form">
              <span>{dateFormat(item?.update, "mm.dd.yyyy")}</span>
              <img className="foto-img-detail" src={item.image} />
            </div>
            <div className="card_data">
              <div className="data">
                <div className="text">
                  <label className="text_m">Main Title</label>
                  <div className="cube text_s">
                    <label className="side front">{item.title}</label>
                    <label className="side top">Rasimlar catalogi</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
