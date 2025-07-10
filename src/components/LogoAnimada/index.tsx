import logonew5 from "../../assets/imgs/logonew5.png";

function LogoAnimada() {
  return (
    <div className="col">
      <div className="position-relative text-center mt-3" id="containerImgs">
        <img
          src={logonew5}
          alt=""
          className="img-fluid imgLogoIndex"
        />
        <img
          src="/imgs/LogoCodeCrafter2.png"
          alt=""
          className="position-absolute top-50 start-50 translate-middle imgLogoIndex2"
        />
      </div>
    </div>
  );
}
export default LogoAnimada;
