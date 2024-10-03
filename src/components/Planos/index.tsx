import TituloGeral from "../TituloGeral";

function Planos() {
  return (
    <section className=" " id="sec3">
      <TituloGeral id="section3" titulo="Planos da C.C.A." />
      <div className="container pt-5">
        <div className="row justify-content-around">
          <div className="col-md-auto text-center border border-2 border-info rounded p-5 bordersec1">
            {/* <img
              src="/imgs/icons8-html-5-48.png"
              alt="#"
              className="imgsec1 mb-1"
            /> */}
            <p>
              <strong>HTML5</strong>
            </p>
            <p>20 horas - prática/teoria</p>
          </div>
          <div className="col-md-auto text-center border border-2 border-info rounded p-5 bordersec1">
            {/* <img
              src="/imgs/icons8-css3-48.png"
              alt="#"
              className="imgsec1 mb-1"
            /> */}
            <p>
              <strong>CSS3</strong>
            </p>
            <p>18 horas - prática/teoria</p>
          </div>
          <div className="col-md-auto text-center border border-2 border-info rounded p-5 bordersec1">
            {/* <img
              src="/imgs/icons8-javascript-48.png"
              alt="#"
              className="imgsec1"
            /> */}
            <p>
              <strong>JAVASCRIPT</strong>
            </p>
            <p>30 horas - prática/teoria</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planos;
