import React from 'react';

function Header(){
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="/home">Single Page Navigation</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <li className="nav-item">
                    <a className="nav-link" id="Home" aria-current="page" href="/home"> <i className="fa-solid fa-house-chimney fa-lg"></i> Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " id="About" aria-current="page" href="/about"> <i className="fa-solid fa-circle-info fa-lg"></i>About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " id="Project" aria-current="page" href="/projects"> <i className="fa-solid fa-folder-closed fa-lg"></i>Our Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " id="Services" aria-current="page" href="/services"> <i className="fa-solid fa-signs-post fa-lg"></i>Our Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " id="Contact" aria-current="page" href="/contact"> <i className="fa-solid fa-mobile fa-lg "></i>Contact Us</a>
                </li>

            </ul>
        </div>
    </div>
</nav>
);

}
export default Header;