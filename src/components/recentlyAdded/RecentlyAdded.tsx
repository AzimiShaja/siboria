import "./recentlyAdded.style.scss";
import arrow from "../../assets/arrow-right.svg";
import arrow_white from "../../assets/arrow-right-white.svg";
import data from "./data";
const RecentlyAdded = () => {
    return (
        <div className="recently-added-container">
            <div className="recently-added-context">
                <div className="top-bar">
                    <h1>Recently Added</h1>
                    <div className="right-side-buttons">
                        <img src={arrow} alt="arrow" />
                        <img src={arrow_white} alt="arrow" />
                    </div>
                </div>
                <div className="card-container">
                    {data.map((data) => (
                        <div className="card">
                            <div className="card-img">
                                <img src={data.img} alt="" />
                            </div>
                            <h1>{data.title}</h1>
                            <p>
                                Year: {data.year} | {data.type}
                            </p>
                            <div className="card-price">
                                <h1>${data.price}</h1>
                                <button>View Details</button>
                            </div>
                            <div className="card-footer">
                                <p>{data.bids} bids so far</p>
                                <p>bidding closes in 3 days</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentlyAdded;
