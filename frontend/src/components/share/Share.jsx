import "./share.css"
import {PermMedia} from "@mui/icons-material"
function Share() {
  return (
    <div className="share"> 
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input placeholder="whats inyour mind?" className="shareInput" />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon"/>
              <span className="shareOptionText">Photo or video</span>
            </div>
            <div className="shareOption">
              <PermMedia className="shareIcon"/>
              <span className="shareOptionText">Photo or video</span>
            </div>
            <div className="shareOption">
              <PermMedia className="shareIcon"/>
              <span className="shareOptionText">Photo or video</span>
            </div>
            <div className="shareOption">
              <PermMedia className="shareIcon"/>
              <span className="shareOptionText">Photo or video</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share
