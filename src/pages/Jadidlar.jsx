import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fakeData from "../data/jadidlar.json";
import Tab from "../components/components/Tab";
import fakeTab from "../data/tablist.json";
import CardAsarlar from "../components/components/CardAsarlar";
import Asar from "../data/Asarlar.json";
import Search from "../components/components/Search";
import Menu from "../components/components/Menu";
import Spinner from "../components/components/Spinner";
import Empty from "../components/components/Empty";
import Details from "../components/components/Details";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import HomCardXikmat from "../components/Home/HomCardXikmat";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo";
export default function Jadidlar() {
  const { t } = useTranslation();

  const route = useParams();
  // const [apiData, setapiData] = useState();
  const [activeTab, setActiveTab] = useState(1);
  // const [apiasar, setapiAsar] = useState(Asar);

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.jadidById(route?.id));
    console.log(response?.hikmatli_sozlar, "hikmatlar");
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = `Jadidlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  // Asarlar api

  //

  // Maqolalar api
  const [apiDataMaqola, setApiDataMaqola] = useState();
  const fetchDataMaqola = async () => {
    const response = await DataService.get(endpoints.article, {
      jadid: route?.id,
    }); //endpoint o'zgartirilsin  endpoindi tayyor

    setApiDataMaqola(response);
  };
  useEffect(() => {
    fetchDataMaqola();
  }, []);
  //

  // Sherlar So'zlar api
  const [apiDataSherlar, setApiDataSherlar] = useState();
  const fetchDataSherlar = async () => {
    const response = await DataService.get(endpoints.sherlar, {
      jadid: route?.id,
    });
    setApiDataSherlar(response.results);
  };
  useEffect(() => {
    fetchDataSherlar();
  }, []);
  //

  // Esdaliklar So'zlar api
  const [apiDataEsdaliklar, setApiDataEsdaliklar] = useState();
  const fetchDataEsdaliklar = async () => {
    const response = await DataService.get(endpoints.esdalik, {
      jadid: route?.id,
    });
    setApiDataEsdaliklar(response.results);
  };
  useEffect(() => {
    fetchDataEsdaliklar();
  }, []);
  //

  // Hikmatli So'zlar api
  const [apiDataHikmat, setApiDataHikmat] = useState();
  const fetchDataHikmat = async () => {
    const response = await DataService.get(endpoints.wisewords, {
      jadid: route?.id,
    });
    setApiDataHikmat(response);
  };
  useEffect(() => {
    fetchDataHikmat();
  }, []);
  //

  const tablist = [
    {
      id: 1,
      title: "jadid_",
    },
    {
      id: 2,
      title: "asarlar_",
    },
    {
      id: 3,
      title: "maqolalar_",
    },
    {
      id: 4,
      title: "sherlar_",
    },
    {
      id: 5,
      title: "esdaliklar_",
    },
    {
      id: 6,
      title: "hikmat_",
    },
  ];
  const onChangeTab = (id) => {
    setActiveTab(id);
  };
  const activePanel = () => {
    switch (activeTab) {
      case 1:
        return (
          <div>
            {apiData ? (
              <Details
                image={apiData?.image}
                fullname={apiData?.fullname}
                birthday={apiData?.birthday}
                die_day={apiData?.die_day}
                bio={apiData?.bio}
              />
            ) : (
              <Spinner />
            )}
          </div>
        );
      case 2:
        return (
          <div>
            {apiData?.asarlar?.length > 0 ? (
              <div>
                {apiData ? (
                  <CardAsarlar apiData={apiData.asarlar} />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
      case 3:
        return (
          <div>
            {apiData?.maqolalar?.length > 0 ? (
              <div>
                {apiData ? (
                  <CardAsarlar apiData={apiData.maqolalar} />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
      case 4:
        return (
          <div>
            {apiData?.sherlar?.length > 0 ? (
              <div>
                {apiData ? (
                  <CardAsarlar apiData={apiData.sherlar} />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
      case 5:
        return (
          <div>
            {apiData?.hotiralar?.length > 0 ? (
              <div>
                {apiData ? (
                  <CardAsarlar apiData={apiData.hotiralar} />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
      case 6:
        return (
          <div>
            {apiData?.hikmatli_sozlar?.length > 0 ? (
              <div>
                {apiData ? (
                  <HomCardXikmat apiData={apiData.hikmatli_sozlar} />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
    }
  };
  return (
    <div className="jadidlar_container container_full">
      <Menu title="jadidlar_" link="/jadidlarAll" subtitle={apiData?.title} />
      <SEO
        title={apiData?.fullname}
        image={apiData?.image}
        discription={apiData?.fullname}
      />
      {/* <i
        onClick={() =>
          (window.location.href = `https://telegram.me/share/url?url=https://jadidlar-demo.vercel.app/jadidlar/${apiData?.id}`)
        }
      >
        <PiShareFatBold />
      </i> */}
      <Tab tablist={tablist} onChange={onChangeTab} active={activeTab} />
      {activePanel()}
    </div>
  );
}
