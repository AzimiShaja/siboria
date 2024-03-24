import { useState } from "react";
import "./header.style.scss";
import { FaBars } from "react-icons/fa6";
const Header = () => {
    const [isActive, setIsActive] = useState("home");
    const [openNav, setOpenNav] = useState(false);
    return (
        <>
            <header>
                <h1 className="logo">
                    Siboria<span>.</span>
                </h1>
                <nav>
                    <div onClick={() => setIsActive("home")}>
                        <a className={isActive === "home" ? "active-nav" : ""} href="#home">
                            Home
                        </a>
                        <div className={`${isActive === "home" ? "active-bar" : ""}`}></div>
                    </div>
                    <div onClick={() => setIsActive("collections")}>
                        <a className={isActive === "collections" ? "active-nav" : ""} href="#collections">
                            Collections
                        </a>
                        <div className={`${isActive === "collections" ? "active-bar" : ""}`}></div>
                    </div>

                    <div onClick={() => setIsActive("how")}>
                        <a className={isActive === "how" ? "active-nav" : ""} href="#how">
                            How We Collect
                        </a>
                        <div className={`${isActive === "how" ? "active-bar" : ""}`}></div>
                    </div>

                    <div onClick={() => setIsActive("sell")}>
                        <a className={isActive === "sell" ? "active-nav" : ""} href="#sell">
                            Sell An Antique
                        </a>
                        <div className={`${isActive === "sell" ? "active-bar" : ""}`}></div>
                    </div>
                    <div onClick={() => setIsActive("Blog")}>
                        <a className={isActive === "Blog" ? "active-nav" : ""} href="#Blog">
                            Blog
                        </a>
                        <div className={`${isActive === "Blog" ? "active-bar" : ""}`}></div>
                    </div>
                </nav>

                <button className="right-side-button">Our Collections</button>
                <FaBars onClick={() => setOpenNav(!openNav)} className="bar-icon" />
            </header>
            <div
                className="nav-mobile"
                style={{ height: openNav ? "350px" : "0", padding: openNav ? "20px" : "0" }}
            >
                <div onClick={() => setIsActive("home")}>
                    <a className={isActive === "home" ? "active-nav" : ""} href="#home">
                        Home
                    </a>
                    <div className={`${isActive === "home" ? "active-bar" : ""}`}></div>
                </div>
                <div onClick={() => setIsActive("collections")}>
                    <a className={isActive === "collections" ? "active-nav" : ""} href="#collections">
                        Collections
                    </a>
                    <div className={`${isActive === "collections" ? "active-bar" : ""}`}></div>
                </div>

                <div onClick={() => setIsActive("how")}>
                    <a className={isActive === "how" ? "active-nav" : ""} href="#how">
                        How We Collect
                    </a>
                    <div className={`${isActive === "how" ? "active-bar" : ""}`}></div>
                </div>

                <div onClick={() => setIsActive("sell")}>
                    <a className={isActive === "sell" ? "active-nav" : ""} href="#sell">
                        Sell An Antique
                    </a>
                    <div className={`${isActive === "sell" ? "active-bar" : ""}`}></div>
                </div>
                <div onClick={() => setIsActive("Blog")}>
                    <a className={isActive === "Blog" ? "active-nav" : ""} href="#Blog">
                        Blog
                    </a>
                    <div className={`${isActive === "Blog" ? "active-bar" : ""}`}></div>
                </div>
            </div>
        </>
    );
};

export default Header;
