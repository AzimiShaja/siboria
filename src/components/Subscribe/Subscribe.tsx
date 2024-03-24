import "./subscribe.style.scss";
import { IoIosSend } from "react-icons/io";
import radio from "../../assets/radio.png";
const Subscribe = () => {
    return (
        <div className="subscribe-container">
            <div className="subscribe-context">
                <div className="subscribe-text">
                    <h1>Subscribe Our Newsletter</h1>
                    <p>Receive latest news, update, and many other things every week.</p>
                    <div className="subscribe-input">
                        <input type="text" placeholder="Enter Your Email address" />
                        <button>
                            <IoIosSend />
                        </button>
                    </div>
                </div>
                <div className="subscribe-img">
                    <img src={radio} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
