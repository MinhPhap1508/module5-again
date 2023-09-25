import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            {/* ================ header section start ================= */}
            <header className="header_area">
                <div className="header-top">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div id="logo">
                                <Link to="/"><img src={process.env.PUBLIC_URL + '/img/Furama.png'} alt title /></Link>
                            </div>
                            <div className="ml-auto d-none d-md-block d-md-flex">
                                <div className="media header-top-info">
                                    <span className="header-top-info__icon"><i className="fas fa-phone-volume" /></span>
                                    <div className="media-body">
                                        <p>Have any question?</p>
                                        <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
                                    </div>
                                </div>
                                <div className="media header-top-info">
                                    <span className="header-top-info__icon"><i className="ti-email" /></span>
                                    <div className="media-body">
                                        <p>Have any question?</p>
                                        <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            {/* <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav">
                                    <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/create-customers">Create Customers</Link></li>
                                    <li className="nav-item submenu dropdown">
                                        <Link to="/customers" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Customer</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="/edit-customers">Edit Customer</Link>
                                            </li><li className="nav-item"><Link className="nav-link" to="/create-customers">Add Customer</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                                    <li className="nav-item submenu dropdown">
                                        <Link to="/create-house" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Service</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="/create-villa">Create Villa</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/create-house">Create House</Link>
                                            </li><li className="nav-item"><Link className="nav-link" to="/create-room">Create Room</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <Link to="/contract" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contract</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="/create-contract">Add Contract</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <ul className="social-icons ml-auto">
                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                <li><a href="#"><i className="fas fa-rss" /></a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* <div class="search_input" id="search_input_box">
    <div class="container">
<form class="d-flex justify-content-between">
  <input type="text" class="form-control" id="search_input" placeholder="Search Here">
  <button type="submit" class="btn"></button>
  <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
</form>
    </div>
  </div> */}
                </div>
            </header>
            {/* ================ header section end ================= */}

        </>
    )
}
export default Header;