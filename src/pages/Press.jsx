import React, { useState } from "react";
import Tab from "../components/components/Tab";
import Search from "../components/components/Search";
import Empty from "../components/components/Empty";
import Lists from "../components/Archive/Lists";
import Menu from "../components/components/Menu";
import Tarix from "../components/Matbuot/Tarix";
import Siyosat from "../components/Matbuot/Siyosat";
import Iqtisod from "../components/Matbuot/Iqtisod";
import Madaniyat from "../components/Matbuot/Madaniyat";
import Ijtimoiy from "../components/Matbuot/Ijtimoiy";
import Adabiyot from "../components/Matbuot/Adabiyot";
import Talim from "../components/Matbuot/Talim";
import Boshqa from "../components/Matbuot/Boshqa";
import Bibliografik from "../components/Matbuot/Bibliografik";
import { useNavigate, useParams } from "react-router-dom";

export default function Press() {
  const params = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(params?.tab);
  const [search, setSearch] = useState("");

  const tablist = [
    { id: "tarix", title: "tarix_" },
    { id: "siyosat", title: "siyosat_" },
    { id: "iqtisod", title: "iqtisod_" },
    { id: "madaniyat", title: "madaniyat_" },
    { id: "ijtimoiy", title: "ijtimoiy_" },
    { id: "adabiyot", title: "adabiyot_" },
    { id: "talim", title: "talim_" },
    { id: "boshqa", title: "boshqa_" },
    { id: "see", title: "see_" },
  ];
  const onChangeTab = (tab) => {
    setActiveTab(tab);
    navigate(`/matbuot/${tab}`);
  };

  const mains = () => {
    switch (activeTab) {
      case "tarix":
        let x = document.querySelector("title");
        x.textContent = "Manbalar / Matbuot / Tarix";
        return <Tarix search={search} />;
      case "siyosat":
        let w = document.querySelector("title");
        w.textContent = "Manbalar / Matbuot / Siyosat";
        return <Siyosat search={search} />;
      case "iqtisod":
        let r = document.querySelector("title");
        r.textContent = "Manbalar / Matbuot / Iqtisod";
        return <Iqtisod search={search} />;
      case "madaniyat":
        let t = document.querySelector("title");
        t.textContent = "Manbalar / Matbuot / Madaniyat va sanat";
        return <Madaniyat search={search} />;
      case "ijtimoiy":
        let u = document.querySelector("title");
        u.textContent = "Manbalar / Matbuot / Ijtimoiy masalalar va din";
        return <Ijtimoiy />;
      case "adabiyot":
        let i = document.querySelector("title");
        i.textContent = "Manbalar / Matbuot / Adabiyot";
        return <Adabiyot />;
      case "talim":
        let o = document.querySelector("title");
        o.textContent = "Manbalar / Matbuot / Talim-Tarbiya";
        return <Talim />;
      case "boshqa":
        let h = document.querySelector("title");
        h.textContent = "Manbalar / Matbuot / Boshqa masalalar";
        return <Boshqa search={search} />;
      case "see":
        let n = document.querySelector("title");
        n.textContent = "Manbalar / Matbuot / Bibliografik ko'rsatkich";
        return <Bibliografik search={search} />;
    }
  };
  const onSearch = (value) => {
    setSearch(value);
  };
  return (
    <>
      <div className="container_full">
        <Menu title="matbuot_" subtitle={`${activeTab}_`} />
        <Search onSearch={onSearch} />
        <Tab onChange={onChangeTab} active={activeTab} tablist={tablist} />
        {mains()}
      </div>
    </>
  );
}
