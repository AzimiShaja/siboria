import { CiSearch } from "react-icons/ci";
import "./search.style.scss";
const Search = () => {
    return (
        <div className="search-container">
            <form className="search-context">
                <div className="search-category">
                    <h1>Location</h1>
                    <select required>
                        <option selected disabled value="all">
                            Country
                        </option>
                        <option value="gun">New Zeeland</option>
                        <option value="knife">USA</option>
                        <option value="sword">Japan</option>
                    </select>
                </div>
                <div className="search-category">
                    <h1>Religion</h1>
                    <select required>
                        <option selected>Asatro</option>
                        <option>Gun</option>
                        <option>Knife</option>
                        <option>Sword</option>
                    </select>
                </div>
                <div className="search-category">
                    <h1>Year</h1>
                    <select required>
                        <option selected>793 AD</option>
                        <option>2000 AD</option>
                        <option>1230 AD</option>
                        <option>1432 AD</option>
                    </select>
                </div>
                <div className="search-category">
                    <h1>Type</h1>
                    <select required>
                        <option value="all">Weapons</option>
                        <option value="gun">Gun</option>
                        <option value="knife">Knife</option>
                        <option value="sword">Sword</option>
                    </select>
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
