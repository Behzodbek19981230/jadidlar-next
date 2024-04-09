import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Jadidlar from "./pages/Jadidlar";
import NotFound from "./pages/404";
import NewsDetail from "./pages/NewsDetail";
import Korular from "./components/Korular";
import Foydalanuvchi from "./pages/Foydalanuvchi";
import JadidlarAll from "./pages/JadidlarAll";
import NewsMain from "./pages/NewsMain";
import MeetingDetail from "./pages/MeetingsDetail";
import MeetingsPage from "./pages/MeetingsPage";
import CollectionPage from "./pages/CollectionPage";
import ResearchPage from "./pages/ResearchPage";
import ArchiveDocuments from "./pages/ArchiveDocuments";
import Turkiston from "./pages/Turkish";
import About from "./pages/About";
import SeminarsPage from "./pages/SeminarsPage";
import SeminarsDetail from "./pages/SeminarsDetail";
import Press from "./pages/Press";
import Foto from "./pages/Foto";
import FotoPage from "./pages/FotoPage";
import Video from "./pages/Video";
import Audio from "./pages/Audio";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/newsDetail" Component={NewsMain} />
          <Route path="/newsDetail/:id" Component={NewsDetail} />
          <Route path="/meetingsPage" Component={MeetingsPage} />
          <Route path="/meetingsDetail/:id" Component={MeetingDetail} />
          <Route path="/seminarsPage" Component={SeminarsPage} />
          <Route path="/seminarsDetail/:id" Component={SeminarsDetail} />
          <Route path="/jadidlar" Component={Jadidlar} />
          <Route path="/koruvlar" Component={Korular} />
          <Route path="/foydalanuvchi" Component={Foydalanuvchi} />
          <Route path="/jadidlarAll" Component={JadidlarAll} />
          <Route path="/jadidlar/:id" Component={Jadidlar} />
          <Route path="/collectionPage" Component={CollectionPage} />
          <Route path="/collectionPage/:tab" Component={CollectionPage} />
          <Route path="/resPage" Component={ResearchPage} />
          <Route path="/resPage/:tab" Component={ResearchPage} />
          <Route path="/arxiv" Component={ArchiveDocuments} />
          <Route path="/arxiv/:tab" Component={ArchiveDocuments} />
          <Route path="/matbuot" Component={Press} />
          <Route path="/matbuot/:tab" Component={Press} />
          <Route path="/turkiston" Component={Turkiston} />
          <Route path="/turkiston/:tab" Component={Turkiston} />
          <Route path="/suratlar/:id" Component={Foto} />
          <Route path="/fotos" Component={FotoPage} />
          <Route path="/video" Component={Video} />
          <Route path="/video/:id" Component={Video} />
          <Route path="/audio" Component={Audio} />
          <Route path="/search" Component={SearchPage} />
          <Route path="/about" Component={About} />
          <Route path="*" Component={NotFound} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
