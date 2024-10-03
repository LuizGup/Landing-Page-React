import { handleScroll } from "../../resources/funcionalidades.js";

function Links() {
  return (
    <div
      className="collapse navbar-collapse justify-content-between"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav mb-2 mb-lg-0 flex-grow-1 justify-content-center">
        <li className="nav-item">
          <button onClick={() => handleScroll('root')} className="nav-link aIndex me-5" id="">
            Home
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => handleScroll('sec2')} className="nav-link aIndex me-5" id="">
            Alunos
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => handleScroll('section3')} className="nav-link aIndex me-5" id="">
            Planos
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => handleScroll('section4')} className="nav-link aIndex me-5" id="">
            Dúvidas
          </button>
        </li>
      </ul>
      <form className="d-flex align-self-end" role="search">
        <button className="btn btn-success align-self-end m-3 mgr2" id="btnind">
          WhatsApp
        </button>
      </form>
    </div>
  );
}

export default Links;
