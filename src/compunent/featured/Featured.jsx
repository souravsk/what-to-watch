import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}){
    return(
        <div className="featured">
            {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                </select>
            </div>
                 )}
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Luna_messi_01.jpg"/>
            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Poster_for_the_IMAX_3D_movie_Hidden_Universe.jpg/1200px-Poster_for_the_IMAX_3D_movie_Hidden_Universe.jpg" alt="post"/>
            
            <span className="desc">
                jlasdfljsldjfasd
                sdfsdfsdfsdfsdf
                sdf
                sdfsdfsdfsdfsdfsdf
                sdf
                sdfdfdfd
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <spam>Play</spam>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
     </div>
    );
}