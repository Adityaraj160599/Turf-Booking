import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="index.html" className="logo">
                                    <h3><i>PLAY SPOTS</i></h3>
                                </a>
                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id="searchText" name="searchKeyword" onkeypress="handle" />
                                        <i className="fa fa-search" />
                                    </form>
                                </div>
                                <ul className="nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/aboutus">About Us</Link></li>
                                    <li><Link to="/booknow">BookNow</Link></li>
                                    <li><Link to="/newsandevents">News & Events</Link></li>
                                    <li><Link to="/careers">Careers</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li></li>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot" />
                    <div className="dots">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div> */}
        </>
    )
}


export default Header;



