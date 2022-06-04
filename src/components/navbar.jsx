const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-0 darkbluenavy-bg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                <a className="navbar-brand boogaloo-font">amirhossein</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="d-flex align-items-center">
                        <a href="#projects" className="nav-link text-white">Projects</a>
                        <a href="https://wa.me/989014784362" target="_blank" className="nav-link"><button className="btn btn-light shadow-0">Hire me</button></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;