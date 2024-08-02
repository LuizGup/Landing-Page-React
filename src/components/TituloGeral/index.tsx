type TituloGeralProps = {
    titulo: string;
};

function TituloGeral({ titulo }: TituloGeralProps){
    return(
        <div className="row justify-content-center ">
          <div className="col-12 text-center pb-5">
            <h1>{titulo}</h1>
          </div>
        </div>
    );
}

export default TituloGeral;