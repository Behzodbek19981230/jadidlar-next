import React, { useEffect, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";
import Spinner from "../../components/components/Spinner";

export default function Audio() {
  // Audio api
  const [apiData, setApiData] = useState();
  const [activeAudio, setActiveAudio] = useState();
  const [oldAudio, setoldAudio] = useState();

  const fetchData = async () => {
    const response = await DataService.get(endpoints.audio);
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = "Ko'r-Eshit-O'qi / Eshtuvlar";
  };
  useEffect(() => {
    fetchData();
    return () => {
      setoldAudio();
      setActiveAudio();
    };
  }, []);

  useEffect(() => {
    if (oldAudio) {
      var x = document.getElementById(oldAudio);
      x.autoplay = false;
      x.load();
    }
    if (activeAudio) {
      var y = document.getElementById(activeAudio);
      y.autoplay = true;
      y.load();
      setoldAudio(activeAudio);
    }
  }, [activeAudio]);
  return (
    <div className="audio_container">
      {apiData ? (
        <div className="audio_content">
          {apiData?.results?.slice(0, 8).map((audio) => (
            <div className="player active" key={audio?.id}>
              <div className="imgbox">
                <img src={audio.image} alt="" />
              </div>
              <h3>{audio.title}</h3>

              {/* <audio
                src={audio.audio}
                id={`audio${audio?.id}`}
                type="audio/mp3"
                onPlay={() => setActiveAudio(`audio${audio?.id}`)}
                controls

              ></audio> */}
              <audio src="https://api.jadidlar.uz/storage/uploads/audios/tgLZjL0ONvZMKgOJrVctGbTckCy1C91Fn6Npc4Vj.mp3"></audio>
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
