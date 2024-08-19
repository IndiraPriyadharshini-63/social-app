import Video from "../video/Video"
import "./videoList.css"

function VideoList({videos}) {
  return (
      <div
      style={{
        marginTop: 20,
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 20,
      }}
    >
      {videos.map((video) => (
        <Video key={video.id} {...video} />
      ))}
    </div>
  )
}

export default VideoList
