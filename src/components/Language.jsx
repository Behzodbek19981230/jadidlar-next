import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../redux/reduser/lang";
import i18next from "i18next";

export default function Language() {
  const lan =
    typeof window !== "undefined" && localStorage.getItem("JADID_LAN");
  const [active, setActive] = useState(
    lan == "ru" ? "Ўз" : lan == "en" ? "Eng" : "O'z"
  );
  const [selectClicked, setSelectClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [caretRotate, setCaretRotate] = useState(false);
  const dispatch = useDispatch();
  const handleSelectClick = () => {
    setSelectClicked(!selectClicked);
    setCaretRotate(!caretRotate);
    setMenuOpen(!menuOpen);
  };
  const handleChange = (value) => {
    dispatch(changeLanguage(value));
    localStorage.setItem("JADID_LAN", value);
    i18next.changeLanguage(value);
    setActive(value == "ru" ? "Ўз" : value == "en" ? "Eng" : "O'z");
  };
  return (
    <div className={`dropdown ${selectClicked ? "select-clicked" : ""}`}>
      <div className="select" onClick={handleSelectClick}>
        <span className="selected">{active}</span>
        <div className={`caret ${caretRotate ? "caret-rotate" : ""}`}></div>

        <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>
          <li
            className={active == "O'z" ? "active" : ""}
            onClick={() => handleChange("uz")}
          >
            O'zbek
          </li>
          <li
            className={active == "Ўз" ? "active" : ""}
            onClick={() => handleChange("ru")}
          >
            Ўзбек
          </li>
          <li
            className={active == "Eng" ? "active" : ""}
            onClick={() => handleChange("en")}
          >
            English
          </li>
        </ul>
      </div>
    </div>
  );
}
