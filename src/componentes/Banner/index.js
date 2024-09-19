import "./banner.css";

function Banner() {
  // JSX - parece html mas não é!
  return (
    <header
      className="banner"
      style={{
        backgroundImage: "url(/imagens/fundo--.png)",
      }}
    >
      <div className="texto_banner">
        <h1>Cadastro de Colaboradores</h1>
      </div>
      <div>
        <img src="/imagens/Group.svg" alt="Banner principal da página" />
      </div>
    </header>
  );
}

export default Banner;
