import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("form enviado", nome, cpf, email, data, imagem, time);
    aoCadastrar({
      nome,
      cpf,
      email,
      data,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario-container">
      <form
        className="formulario"
        onSubmit={aoSubmeter}
        style={{
          backgroundImage: "url(/imagens/fundo--.png)",
        }}
      >
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="CPF"
          placeholder="Digite o CPF "
          valor={cpf}
          aoAlterado={(valor) => setCpf(valor)}
        />

        <Campo
          label="E-mail"
          placeholder="Informe o E-mail"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />

        <Campo
          obrigatorio
          type="date"
          label="Data"
          placeholder=""
          valor={data}
          aoAlterado={(valor) => setData(valor)}
        />

        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Empresas"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar card" />
      </form>

      {/* cadastro de time */}

      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
        style={{
          backgroundImage: "url(/imagens/fundo--.png)",
        }}
      >
        <h2>Preencha os dados para criar um novo time:</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time "
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio
          type="color"
          label="Cor"
          placeholder="Digite a cor do time "
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Botao texto="Criar um novo time" />
      </form>
    </section>
  );
};

export default Formulario;
