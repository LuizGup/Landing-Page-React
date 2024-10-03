type TituloGeralProps = {
    titulo: string;
    id: string;
};

function TituloGeral({ titulo, id }: TituloGeralProps){
    return(
        <div className="row justify-content-center ">
          <div className="col-12 text-center pb-5">
            <h1 id={id}>{titulo}</h1>
          </div>
        </div>
    );
}

export default TituloGeral;