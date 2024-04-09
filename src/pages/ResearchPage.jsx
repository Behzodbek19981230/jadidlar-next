import React, { useEffect, useState } from "react";
import Tab from "../components/components/Tab";
import ResCollection from "../components/Research/ResCollection";
import ResArticle from "../components/Research/ResArticle";
import Disertation from "../components/Research/Dissertation";
import Memories from "../components/Research/Memories";
import Search from "../components/components/Search";
import Menu from "../components/components/Menu";
import { useNavigate, useParams } from "react-router";

export default function ResearchPage() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  const [activeTab, setActiveTab] = useState(params?.tab);
  useEffect(() => {
    setActiveTab(params?.tab);
  }, [params?.tab]);
  const tablist = [
    { id: "asarlar", title: "asarlar_" },
    { id: "maqolalar", title: "maqolalar_" },
    { id: "disser", title: "disser_" },
    { id: "esdaliklar", title: "esdaliklar_" },
  ];

  const onChangeTab = (id) => {
    setActiveTab(id);
    navigate(`/resPage/${id}`);
  };
  const mains = () => {
    switch (activeTab) {
      case "asarlar":
        let x = document.querySelector("title");
        x.textContent = "Izlanishlar / Asarlar";
        return <ResCollection search={search} />;
      case "maqolalar":
        let e = document.querySelector("title");
        e.textContent = "Izlanishlar / Maqolalar";
        return <ResArticle search={search} />;
      case "disser":
        let r = document.querySelector("title");
        r.textContent = "Izlanishlar / Disertatsiyalar";
        return <Disertation search={search} />;
      case "esdaliklar":
        let t = document.querySelector("title");
        t.textContent = "Izlanishlar / Esdaliklar";
        return <Memories search={search} />;
    }
  };
  const onSearch = (value) => {
    setSearch(value);
    console.log("shu search inputdan ", value);
  };
  return (
    <>
      <div className="container_full">
        <Menu title="izlanishlar_" subtitle={`${activeTab}_`} />
        <Search onSearch={onSearch} />
        <Tab onChange={onChangeTab} active={activeTab} tablist={tablist} />
        {mains()}
      </div>
    </>
  );
}
