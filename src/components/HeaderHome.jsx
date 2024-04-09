import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import SearchNavbar from "./components/SearchNavbar";
import Language from "./Language";
import HamburgerMenu from "./components/HamburgerMenu";
import { useTranslation } from "react-i18next";
import { GrLogout } from "react-icons/gr";
import ReactModal from "react-modal";
import Logos from "../app/assets/images/Group 2 (3).svg";
import { Head } from "next/document";

export default function HeaderHome() {
  const { t } = useTranslation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [selectClicked, setSelectClicked] = useState(false);
  const [caretRotate, setCaretRotate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const searchRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleOptionClick = (optionText) => {
    setSelectedOption(optionText);
    setSelectClicked(false);
    setCaretRotate(false);
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    // modify some state or variable by -1000% here
  };

  // const [isOpen, setIsOpen] = useState(false);
  const [open, IsOpen] = useState("0");
  const [close, IsClose] = useState(true);

  useEffect(() => {
    isOpen ? IsOpen("0") : IsOpen("-1000%");
  }, [isOpen]);

  const handleHide = () => {
    IsClose ? IsOpen("-1000%") : IsOpen("0");
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log("modal", modalIsOpen);
  // modalni yopish uchun ishlatiladi
  const closeModal = () => setModalIsOpen(false);
  // tokenni o'chirish uchun ishlatiladi
  const onLogout = () => {
    localStorage.removeItem("JADIDLAR_TOKEN");
    setModalIsOpen(false);
  };
  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        className="logout_modal"
        contentLabel="Example Modal"
      >
        <h3>Hisobdan chiqmoqchimisiz?</h3>
        <span onClick={closeModal}>X</span>
        <button onClick={onLogout}>Chiqish</button>
      </ReactModal>
      <nav>
        <div className="nav-row">
          <div className="nav-list">
            <div className="nav-logo">
              <Link href="/">
                <img
                  src={Logos}
                  alt="Logo"
                  style={{ width: "190px", height: "55px" }}
                />
              </Link>
            </div>
          </div>

          <div className="nav-button">
            <div className="nav-links">
              <ul>
                <li className="nav-anime dn">
                  <Link href="/jadidlarAll" className="upper">
                    {t("jadidlar_")}
                  </Link>
                </li>
                <li>
                  <div className="nav-drop">
                    <Link href="#" className="upper">
                      {t("manbalar_")}
                    </Link>
                    <div className="drop-icon">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <ul className="drop-hover">
                    <li>
                      <Link href="/arxiv/royhat">{t("arxiv_")}</Link>
                    </li>
                    <li style={{ paddingBottom: "0" }}>
                      <Link href="/matbuot/tarix">{t("matbuot_")}</Link>
                    </li>
                  </ul>{" "}
                </li>

                <li>
                  <div>
                    <div className="nav-drop">
                      <Link href="#" className="upper">
                        {t("izlanishlar_")}
                      </Link>
                      <div className="drop-icon">
                        <IoIosArrowDown />
                      </div>
                    </div>
                  </div>
                  <ul className="drop-hover">
                    <li>
                      <Link href="/resPage/asarlar">{t("asarlar_")}</Link>
                    </li>
                    <li>
                      <Link href="/resPage/maqolalar">{t("maqolalar_")}</Link>
                    </li>
                    <li>
                      <Link href="/resPage/disser">{t("disser_")}</Link>
                    </li>
                    <li style={{ paddingBottom: "0" }}>
                      <Link href="/resPage/esdaliklar">{t("esdaliklar_")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="nav-drop">
                    <Link href="#" className="upper">
                      {t("til_va_imlo_")}
                    </Link>
                    <div className="drop-icon">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <ul className="drop-hover">
                    <li>
                      <Link href="/collectionPage/asarlar">
                        {t("asarlar_")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/collectionPage/maqolalar">
                        {t("maqolalar_")}
                      </Link>
                    </li>
                    <li style={{ paddingBottom: "0" }}>
                      <Link href="/collectionPage/hikmatlar">
                        {t("hikmatlar_")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="nav-drop">
                    <Link href="#" className="upper">
                      {t("turkiston_")}
                    </Link>
                    <div className="drop-icon">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <ul className="drop-hover">
                    <li>
                      <Link href="/turkiston/asarlar">{t("asarlar_")}</Link>
                    </li>
                    <li>
                      <Link href="/turkiston/maqolalar">{t("maqolalar_")}</Link>
                    </li>
                    <li>
                      <Link href="/turkiston/sherlar">{t("sherlar_")}</Link>
                    </li>
                    <li style={{ paddingBottom: "0" }}>
                      <Link href="/turkiston/esdaliklar">
                        {t("esdaliklar_")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="nav-drop vis-h li">
                    <Link href="#" className="upper">
                      {t("voqealar_")}
                    </Link>
                    <div className="drop-icon">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <ul className="drop-hover">
                    <li>
                      <Link href="/newsDetail">{t("yangiliklar_")}</Link>
                    </li>
                    <li>
                      <Link href="/meetingsPage">{t("yiginlar_")}</Link>
                    </li>
                    <li style={{ paddingBottom: "0" }}>
                      <Link href="/seminarsPage">{t("seminarlar_")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="nav-drop">
                    <Link href="#" className="upper">
                      {t("kor_eshit_oqima_")}
                    </Link>
                    <div className="drop-icon">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <ul className="drop-hover">
                    <li>
                      <Link href="/fotos">{t("suratlar_")}</Link>
                    </li>
                    <li>
                      <Link href="/video">{t("koruvlar_")}</Link>
                    </li>
                    <li style={{ paddingBottom: "0" }}>
                      <Link href="/audio">{t("eshituvlar_")}</Link>
                    </li>
                  </ul>
                </li>
                <li className="db">
                  <Link href="/jadidlarAll" className="upper">
                    {t("jadidlar_")}
                  </Link>
                </li>
                <li className="nav-anime vis-h">
                  <Link href="/about" className="upper">
                    {t("about_")}
                  </Link>
                </li>
              </ul>
            </div>
            {typeof window !== "undefined" &&
            localStorage.getItem("JADIDLAR_TOKEN") ? (
              <button
                className="nav_regis_none"
                onClick={() => setModalIsOpen(true)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <GrLogout style={{ color: "#fff" }} />
              </button>
            ) : (
              ""
            )}
            <div className="bt-none" ref={searchRef}>
              <button type="button" onClick={handleSearchClick}>
                <FaSearch />
              </button>
              {isSearchVisible && (
                <div className="search-bar">
                  <SearchNavbar />
                </div>
              )}
            </div>
            <div>
              <Language />
              <HamburgerMenu />
            </div>
          </div>

          {/* <button
              className={`hamburger-menu ${isOpen ? "open" : ""}`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <FaBars />
            </button>
            {close && (
              <ul className="ul1" style={{ right: `${open}` }}>
                <div className="close-btn" onClick={handleHide}>
                  <IoClose />
                </div>
                <li>Nmadir</li>
                <li>Nmadir</li>
                <li>Nmadir</li>
                <li>Nmadir</li>
              </ul>
            )} */}
        </div>
      </nav>
    </>
  );
}
