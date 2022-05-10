import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listitems.scss"

export default function ListItems({index}) {
  const [isMovered, setIsMovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div 
    className="listItem"
    style={{left: isMovered && (index*225) -50+ (index*2.5) }}
     onMouseEnter={() => setIsMovered(true)}
     onMouseLeave={() => setIsMovered(false)}
     >
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Solo-a-star-wars-story-tall-A_%28cropped%29.png" alt="banar"/>
      {isMovered && (
 <>
      <video src={trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownAltOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1  hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Commodi sapiente optio 
        minus cumque.
         </div>
         <div className="genre">Action</div>
      </div>
      </>       
      )}
    </div>
  )
}
