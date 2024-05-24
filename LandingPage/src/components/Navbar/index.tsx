function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid d-flex">
                <a className="navbar-brand img-fluid" href="#">
                    <img src="src/imgs/logo01.png" alt="Logotipo" id="imglogo" className="m-0 m-md-3 ms-md-5"/>
                </a>
                <h2 className="text-sm-start">Code Crafters Academy</h2>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 flex-grow-1 justify-content-center">
                        <li className="nav-item"><a href="#" className="nav-link aIndex me-5" id="#">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link aIndex me-5" id="#">Sobre Nós</a></li>
                        <li className="nav-item"><a href="#" className="nav-link aIndex me-5" id="#">Contato</a></li>
                    </ul>
                    <form className="d-flex align-self-end" role="search">
                        <button className="btn btn-success align-self-end m-3 mgr2" id="btnind">WhatsApp</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;