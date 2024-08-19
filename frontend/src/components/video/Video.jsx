import "./video.css";

function Video({title, url}) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <iframe
          title={title}
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
