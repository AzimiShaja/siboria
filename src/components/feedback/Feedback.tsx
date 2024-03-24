import statue from "../../assets/statue-3.png";
import pp from "../../assets/pp.jpg";
import "./feedback.style.scss";
import star from "../../assets/star.svg";
const Feedback = () => {
    return (
        <div className="feedback-container">
            <div className="feedback-context">
                <img className="statue" src={statue} />
                <div className="feedback-card">
                    <h1>Buyer's Feedback</h1>
                    <p>
                        Whoe front da of piate heard ah ought. His defective nor convinced residense won.
                        Conenction has put impossible own apartments boisterous.
                    </p>
                    <div className="feedback-card-profile">
                        <img src={pp} alt="" />
                        <div className="feedback-card-profile-text">
                            <h1>Selena Hakim</h1>
                            <p>UI Designer</p>
                            <div className="stars">
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
