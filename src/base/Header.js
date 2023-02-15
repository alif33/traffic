import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function Header() {
    return (
        <div className="header">
            <div className="row">
                <div className="col-md-4">
                   <img
                        className="logo"
                        src="/img/vt-logo.svg"
                        height="50px"
                        width="145px"
                    />
                </div>
                <div className="col-md-4">
                    <div className="search-box">
                        <input
                            className="search"
                            placeholder="Search here"
                        />
                        <button className="btn-search">
                            <BiSearch
                                size={22}
                            />
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <ul className="nav">
                        <li><Link>Traffic Information</Link></li>
                        <li><Link>Maps</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}



