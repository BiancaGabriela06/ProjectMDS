import React, {useState} from 'react'
import '../Navbar.css';

function Navbar(props){
    const [active, setActive] = useState('nav__menu');
    const navToogle = () => {
         active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
    }
    return(
        <nav className="nav">
            BoostByte
            <a href="" className="nav__brand">
             <ul className={active}>
                <li className="nav__item"><a href="#" className="nav_link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav_link">Interview Questions</a></li>
                <li className="nav__item"><a href="#" className="nav_link">Tips and Tricks</a></li>
                <li className="nav__item"><a href="#" className="nav_link">Forum</a></li>  
             </ul>
             <div onClick = {navToogle} className="nav__toggler">
                 <div className="line1"></div>
                 <div className="line2"></div>
                 <div className="line3"></div>
             </div>
            </a>
        </nav>
    );
}

export default Navbar;