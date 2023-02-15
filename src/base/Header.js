import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiMenu, Bix, BiX } from "react-icons/bi";

export default function Header() {
    const [collapse, setCollapse] = useState(false);

    const handleToggle = ()=>{
        if(!collapse){
            document.getElementById("mobile-menu").classList.add("block")
            setCollapse(true)
        }else{
            document.getElementById("mobile-menu").classList.remove("block")
            setCollapse(false)
        }
    }

    return (
        <div className="header">
            <div className="row">
                <div className="col-md-4 col-sm-6 col-6">
                   <img
                        className="logo"
                        src="/img/vt-logo.svg"
                        height="50px"
                        width="145px"
                    />
                </div>
                <div className="col-md-4 col-sm-1 col-1">
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
                <div className="col-md-4 col-sm-5 col-5">
                    <div onClick={handleToggle} className="hamberger-icon">
                        <span onClick={handleToggle} className="pointer">
                            {
                                !collapse?(
                                    <BiMenu
                                        size={28}
                                        color="#ffffff"
                                    />
                                ):(
                                    <BiX
                                        size={28}
                                        color="#ffffff"
                                    />
                                )
                            }
                            
                        </span>
                    </div>
                    <ul className="nav">
                        <li><Link to="/traffic-information">Traffic Information</Link></li>
                        <li><Link>Maps</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}



