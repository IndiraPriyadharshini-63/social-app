import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import VideoList from "../../components/videoList/VideoList";
import "./videos.css";
import SearchInput from "../../components/searchInput/SearchInput";

function Videos() {
  const [searchTerm, setSearchTerm] = useState("");
  const videos = [
    { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/VIDEO_ID1" },
    { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/VIDEO_ID2" },
  ];

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Topbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Search your videos</h1>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <VideoList videos={filteredVideos} />
      </div>
    </>
  );
}

export default Videos;
