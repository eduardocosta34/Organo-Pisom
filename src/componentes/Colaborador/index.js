import "./colaborador.css";
import { AiTwotoneDelete } from "react-icons/ai";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  // function favoritar() {
  //   aoFavoritar(colaborador.id);
  // }

  // const propsFavorito = {
  //   size: 25,
  //   onClick: favoritar,
  // };

  return (
    <div className="colaborador">
      <AiTwotoneDelete
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />

      <div
        className="cabecalho"
        style={{
          backgroundColor: corDeFundo,
          backgroundImage: "url(/imagens/fundo-.png)",
        }}
      >
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>CPF: {colaborador.cpf}</h5>
        <h5>E-MAIL: {colaborador.email}</h5>
        <h5>DATA: {colaborador.data}</h5>

        {/* <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito} color="red" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div> 
        
        Será necessario importar novamente a imagem do coração
        
        */}
      </div>
    </div>
  );
};

export default Colaborador;
