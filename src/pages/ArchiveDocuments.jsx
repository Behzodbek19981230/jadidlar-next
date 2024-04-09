let x = document.querySelector("title");
x.textContent = "Videolar";
import React, { useEffect, useState } from "react";
import Tab from "../components/components/Tab";
import Search from "../components/components/Search";
import Empty from "../components/components/Empty";
import Lists from "../components/Archive/Lists";
import Skaner from "../components/Archive/Skaner";
import Menu from "../components/components/Menu";
import { useNavigate, useParams } from "react-router-dom";

export default function ArchiveDocuments() {
  const params = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState();
  const [search, setSearch] = useState("");

  const tablist = [
    { id: "royhat", title: "royhat_" },
    { id: "skaner", title: "skaner_" },
  ];
  useEffect(() => {
    console.log("bu boride okaaaa", params?.tab);

    setActiveTab(params?.tab);
  }, [params?.tab]);

  const onChangeTab = (tab) => {
    setActiveTab(tab);
    console.log(" tabbbbbbb", tab);
    navigate(`/arxiv/${tab}`);
  };
  const Mains = () => {
    switch (activeTab) {
      case "royhat":
        console.log(activeTab);
        let x = document.querySelector("title");
        x.textContent = "Manbalar / Arxiv hujjatlari / Ro'yxat";
        return <Lists search={search} />;
      case "skaner":
        let a = document.querySelector("title");
        a.textContent = "Manbalar / Arxiv hujjatlari / Skaner";
        return <Skaner search={search} />;
    }
  };
  const onSearch = (value) => {
    setSearch(value);
  };
  return (
    <>
      <div className="container_full">
        <Menu title="manbalar_" subtitle={`${activeTab}_`} />
        <Search onSearch={onSearch} />
        <Tab onChange={onChangeTab} active={activeTab} tablist={tablist} />
        <Mains />
      </div>
    </>
  );
}
