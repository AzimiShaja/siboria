import arrow from "../../assets/arrow-right.svg";
import arrow_white from "../../assets/arrow-right-white.svg";
import "./topCategories.style.scss";
import data from "../Categories/data";
const TopCategories = () => {
    return (
        <div className="top-categories-container">
            <div className="top-categories-context">
                <div className="top-bar">
                    <h1>Top Categories</h1>
                    <div className="right-side-buttons">
                        <img src={arrow} alt="arrow" />
                        <img src={arrow_white} alt="arrow" />
                    </div>
                </div>
                <p>Party we years to order allow asked of. We so opinion friends me message as delight.</p>
                <div className="card-container">
                    {data.map((data) => (
                        <div className="card">
                            <p className="card-number">{data.number}</p>
                            <div className="card-img">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="card-text">
                                <h1>{data.category}</h1>
                                <p>Worefall</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCategories;
