import pottery_img from "../../assets/pottery-image.png";
import "./main.style.scss";
import play_svg from "../../assets/play.svg";
import datas from "./data";
const Main = () => {
    return (
        <main>
            <div className="main-left-side">
                <h1>
                    World's Biggest <span>Antique Collection</span>
                </h1>
                <p>
                    From they fine john he give of rich he. They age and draw mrs like. Improving end distruts
                    may instantly was household applauded incommode.
                </p>
                <div className="main-btns">
                    <button className="btn">Discover Now</button>
                    <div className="play-btn">
                        <img src={play_svg} alt="play" />
                        <p>Watch Video</p>
                    </div>
                </div>
            </div>
            <div className="main-middle-side">
                <img src={pottery_img} alt="pottery-img" />
            </div>
            <div className="main-right-side">
                {datas.map((data) => (
                    <div className="data-container">
                        <img className="svg-img" src={data.img} alt="img" />
                        <div className="data-text">
                            <h1>{data["bids so far"] || data.year || data.origin}</h1>
                            <p>{data.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Main;
