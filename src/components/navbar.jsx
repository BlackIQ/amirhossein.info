import { toast } from 'react-toastify';

const Navbar = () => {
    const hiremeNotify = () => toast.warning('🤦🏻‍♂️ Send your message in send message form!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-0 darkbluenavy-bg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                <a href='/' className="navbar-brand boogaloo-font">amirhossein</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="d-flex align-items-center">
                        <span onClick={hiremeNotify} className="nav-link"><button className="btn btn-light shadow-0">Hire me</button></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;