import React from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <div className="navbar">
            <nav>
                <ul className="button-list">
                    <li>
                        <button className="nav-button" onClick={() => handleClick("/")}>Home</button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => handleClick("/air")} >Air Quality</button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => handleClick("/temperature")} >Climate Vital Signs</button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => handleClick("/BandA")} >BF & AF</button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => handleClick("/about")} >About</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
