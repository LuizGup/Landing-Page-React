import EduardoRoseo from "../../assets/imgs/profileimgs/eduardoRoseo.png";
import MarquesMatos from "../../assets/imgs/profileimgs/marquesMatos.png";
import ViniciusVasconcelos from "../../assets/imgs/profileimgs/viniciusVasconcelos.png";
import LeonardoLima from "../../assets/imgs/profileimgs/leonardoLima.png";
import LuizCarlos from "../../assets/imgs/profileimgs/LuizCarlos.png";


function IntegrantesDoCurso() {
  return (
    <div className="row justify-content-center">
      <div className="d-flex flex-wrap justify-content-center text-center">
        <div className="col-md-3 col-sm-6">
          <img
            className="animatable imgsec2 rounded-3"
            src={EduardoRoseo}
            alt=""
          />
          <h5 className="h5section2 pt-3">
            Eduardo Roseo - Professor da academia, empresario e especialista na
            área da tecnologia.
          </h5>
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            className="animatable imgsec2 rounded-3"
            src={MarquesMatos}
            alt=""
          />
          <h5 className="h5section2 pt-3">
            Marques Matos - Hoje trabalha em uma empresa gringa em assembly,
            altamente qualificado.
          </h5>
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            className="animatable imgsec2 rounded-3"
            src={ViniciusVasconcelos}
            alt=""
          />
          <h5 className="h5section2 pt-3">
            Vinícius Vasconcelos - Ex aluno, hoje mora em Portugal e trabalha
            para uma empresa de tecnologia.
          </h5>
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            className="animatable imgsec2 rounded-3"
            src={LeonardoLima}
            alt=""
          />
          <h5 className="h5section2 pt-3">
            Leonardo Lima - Ex aluno, Criou sua própria empresa no Brasil de
            Inovação, altamente avaliada no mercado.
          </h5>
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            className="animatable imgsec2 rounded-3"
            src={LuizCarlos}
            alt=""
          />
          <h5 className="h5section2 pt-3">
            Luiz Carlos, levou a programação para o governo militar nos USA,
            realizando projetos altamente secretos.
          </h5>
        </div>
      </div>
    </div>
  );
}
export default IntegrantesDoCurso;