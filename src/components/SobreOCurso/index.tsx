import LogoAnimada from "../LogoAnimada";
import cssLogo from "../../assets/imgs/cssLogo.png";
import htmlLogo from "../../assets/imgs/htmlLogo.png";
import jsLogo from "../../assets/imgs/jsLogo.png";

function SobreOCurso() {
  return (
    <section className=" " id="sec1">
      <div className="container d-flex pt-5 pb-5">
        <div className="row">
          <div className="col">
            <h1 className="sec1h1">
              Formação <span className="fullstackpersonalcolor">FullStack</span>{" "}
              é aqui na C.C.A.
            </h1>
            <h3>
              Um curso de alta qualidade, abordando as principais tecnologias e
              linguagens do Web Development e do Backend
            </h3>
            <button type="button" className="mt-4 btn btn-primary rounded-pill">
              <strong>QUERO SER UM CODE CRAFTER</strong>
            </button>
          </div>
          <LogoAnimada />
          <div className="mt-5">
            <div className="row">
              <h2>Tecnologias</h2>
              <h4>
                No curso, desenvolveremos em HTML5, CSS3 e programaremos em
                JavaScript, áreas da programação altamente procuradas pelas as
                empresas.
              </h4>
            </div>
            <div className="container pt-5">
              <div className="row justify-content-around">
                <div className="col-md-auto text-center border border-2 border-info rounded p-5 bordersec1">
                  <img
                    src={htmlLogo}
                    alt="#"
                    className="imgsec1 mb-1"
                  />
                  <p>
                    <strong>HTML5</strong>
                  </p>
                  <p>20 horas - prática/teoria</p>
                </div>
                <div className="col-md-auto text-center border border-2 border-info rounded p-5 bordersec1">
                  <img
                    src={cssLogo}
                    alt="#"
                    className="imgsec1 mb-1"
                  />
                  <p>
                    <strong>CSS3</strong>
                  </p>
                  <p>18 horas - prática/teoria</p>
                </div>
                <div className="col-md-auto text-center border border-2 border-info rounded p-5 bordersec1">
                  <img
                    src={jsLogo}
                    alt="#"
                    className="imgsec1"
                  />
                  <p>
                    <strong>JAVASCRIPT</strong>
                  </p>
                  <p>30 horas - prática/teoria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SobreOCurso;
