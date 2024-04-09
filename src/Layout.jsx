import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/components/Loading";
import HeaderHome from "./components/HeaderHome";
import { endpoints } from "./config/endpoints";
import { DataService } from "./config/dataService";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "./redux/reduser/banner";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [navclass, setnavClass] = useState("is-sticky");
  const lang = useSelector((state) => state.langReducer.value);
  const router = useRouter();
  const dispatch = useDispatch();

  const scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("");
    } else {
      setnavClass("is-sticky");
    }
  };
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", scrollNavigation);
  //     window.scrollTo(0, 0);
  //   }
  // }, []);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await DataService.get(endpoints.slider);
      dispatch(getBanner(res));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  const fetchDataDispatch = async () => {
    const res = await DataService.get(endpoints.slider);
    dispatch(getBanner(res));
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchDataDispatch();
  }, [lang]);
  return (
    <div className="bg bg_img">
      <div className={navclass}>
        <HeaderHome />
      </div>

      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <main className={router.pathname == "/" ? "" : "top_dis"}>
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
