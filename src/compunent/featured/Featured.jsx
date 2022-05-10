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
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
                 )}
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Luna_messi_01.jpg" alt="Luna_messi_01.jpg"/>
            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Scooby_doo_logo.png" alt="Scooby doo logo.png"/>
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