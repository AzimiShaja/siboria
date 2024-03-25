import { CiSearch } from "react-icons/ci";
import "./search.style.scss";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

const Search = () => {
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [showReligionDropdown, setShowReligionDropdown] = useState(false);
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);

    const toggleLocationDropdown = () => {
        setShowLocationDropdown(!showLocationDropdown);
        setShowReligionDropdown(false);
        setShowYearDropdown(false);
        setShowTypeDropdown(false);
    };

    const toggleReligionDropdown = () => {
        setShowReligionDropdown(!showReligionDropdown);
        setShowLocationDropdown(false);
        setShowYearDropdown(false);
        setShowTypeDropdown(false);
    };

    const toggleYearDropdown = () => {
        setShowYearDropdown(!showYearDropdown);
        setShowLocationDropdown(false);
        setShowReligionDropdown(false);
        setShowTypeDropdown(false);
    };

    const toggleTypeDropdown = () => {
        setShowTypeDropdown(!showTypeDropdown);
        setShowLocationDropdown(false);
        setShowReligionDropdown(false);
        setShowYearDropdown(false);
    };

    return (
        <div className="search-container">
            <form className="search-context">
                <div className="search-category" onClick={toggleLocationDropdown}>
                    <h1>Location</h1>
                    <div className="dropdown-container">
                        <p>Norway</p>
                        <IoIosArrowDown />
                    </div>
                    {showLocationDropdown && <Dropdown />}
                </div>
                <div className="search-category" onClick={toggleReligionDropdown}>
                    <h1>Religion</h1>
                    <div className="dropdown-container">
                        <p>Asatro</p>
                        <IoIosArrowDown />
                    </div>
                    {showReligionDropdown && <Dropdown />}
                </div>
                <div className="search-category" onClick={toggleYearDropdown}>
                    <h1>Year</h1>
                    <div className="dropdown-container">
                        <p>793 AD</p>
                        <IoIosArrowDown />
                    </div>
                    {showYearDropdown && <Dropdown />}
                </div>
                <div className="search-category" onClick={toggleTypeDropdown}>
                    <h1>Type</h1>
                    <div className="dropdown-container">
                        <p>Weapons</p>
                        <IoIosArrowDown />
                    </div>
                    {showTypeDropdown && <Dropdown />}
                </div>
                <button type="submit">
                    <CiSearch />
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
