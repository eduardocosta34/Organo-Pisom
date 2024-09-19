import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Dock",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Magalu",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Santillana",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "PerBank",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "Callink",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Tribanco",
      cor: "#FFBA05",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Eduardo Costa",
      email: `aa@gmail.com`,
      cpf: "958.648.759-61",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4E03AQGKjkJRhko5-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721413774958?e=1732147200&v=beta&t=MW_XiLTjWt9h6DmEpb_DxDtxkyTx6ijvwfnVmQpuNiU",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Pablo Mota",
      email: `aa@gmail.com`,
      cpf: "784.958.456.84",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQFxhfnTfBdo1w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704739892718?e=1732147200&v=beta&t=Vk4DlNgJQ3vEnkuU2NWIjKEnI6XVLfCMoQzG04_aYv8",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Bruno Valdez",
      email: `aa@gmail.com`,
      cpf: "032.658.945.22",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4E03AQFHAuzq9QJBvg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649803431291?e=1732147200&v=beta&t=6H7Y_UWl1gedf69430cRi7RSaUmJ1HQIloGbIjtX8Sk",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Irvane Valdez",
      email: `aa@gmail.com`,
      cpf: "333.555.888-11",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4D03AQH9S0K8R-VyoA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1632254029746?e=1732147200&v=beta&t=QBLMOAMUYYfb-Aagb9wX8P-OX_D1kFvtv5gk09w0yV4",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Eduardo Costa",
      email: `aa@gmail.com`,
      cpf: "958.648.759-61",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4E03AQGKjkJRhko5-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721413774958?e=1732147200&v=beta&t=MW_XiLTjWt9h6DmEpb_DxDtxkyTx6ijvwfnVmQpuNiU",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Pablo Mota",
      email: `aa@gmail.com`,
      cpf: "784.958.456.84",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQFxhfnTfBdo1w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704739892718?e=1732147200&v=beta&t=Vk4DlNgJQ3vEnkuU2NWIjKEnI6XVLfCMoQzG04_aYv8",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Bruno Valdez",
      email: `aa@gmail.com`,
      cpf: "032.658.945.22",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4E03AQFHAuzq9QJBvg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649803431291?e=1732147200&v=beta&t=6H7Y_UWl1gedf69430cRi7RSaUmJ1HQIloGbIjtX8Sk",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Irvane Valdez",
      email: `aa@gmail.com`,
      cpf: "333.555.888-11",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4D03AQH9S0K8R-VyoA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1632254029746?e=1732147200&v=beta&t=QBLMOAMUYYfb-Aagb9wX8P-OX_D1kFvtv5gk09w0yV4",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Eduardo Costa",
      email: `aa@gmail.com`,
      cpf: "958.648.759-61",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4E03AQGKjkJRhko5-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721413774958?e=1732147200&v=beta&t=MW_XiLTjWt9h6DmEpb_DxDtxkyTx6ijvwfnVmQpuNiU",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Pablo Mota",
      email: `aa@gmail.com`,
      cpf: "784.958.456.84",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQFxhfnTfBdo1w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704739892718?e=1732147200&v=beta&t=Vk4DlNgJQ3vEnkuU2NWIjKEnI6XVLfCMoQzG04_aYv8",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Bruno Valdez",
      email: `aa@gmail.com`,
      cpf: "032.658.945.22",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4E03AQFHAuzq9QJBvg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649803431291?e=1732147200&v=beta&t=6H7Y_UWl1gedf69430cRi7RSaUmJ1HQIloGbIjtX8Sk",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Irvane Valdez",
      email: `aa@gmail.com`,
      cpf: "333.555.888-11",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4D03AQH9S0K8R-VyoA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1632254029746?e=1732147200&v=beta&t=QBLMOAMUYYfb-Aagb9wX8P-OX_D1kFvtv5gk09w0yV4",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Eduardo Costa",
      email: `aa@gmail.com`,
      cpf: "958.648.759-61",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4E03AQGKjkJRhko5-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721413774958?e=1732147200&v=beta&t=MW_XiLTjWt9h6DmEpb_DxDtxkyTx6ijvwfnVmQpuNiU",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Pablo Mota",
      email: `aa@gmail.com`,
      cpf: "784.958.456.84",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQFxhfnTfBdo1w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704739892718?e=1732147200&v=beta&t=Vk4DlNgJQ3vEnkuU2NWIjKEnI6XVLfCMoQzG04_aYv8",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Bruno Valdez",
      email: `aa@gmail.com`,
      cpf: "032.658.945.22",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4E03AQFHAuzq9QJBvg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649803431291?e=1732147200&v=beta&t=6H7Y_UWl1gedf69430cRi7RSaUmJ1HQIloGbIjtX8Sk",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Irvane Valdez",
      email: `aa@gmail.com`,
      cpf: "333.555.888-11",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4D03AQH9S0K8R-VyoA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1632254029746?e=1732147200&v=beta&t=QBLMOAMUYYfb-Aagb9wX8P-OX_D1kFvtv5gk09w0yV4",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Eduardo Costa",
      email: `aa@gmail.com`,
      cpf: "958.648.759-61",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4E03AQGKjkJRhko5-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721413774958?e=1732147200&v=beta&t=MW_XiLTjWt9h6DmEpb_DxDtxkyTx6ijvwfnVmQpuNiU",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Pablo Mota",
      email: `aa@gmail.com`,
      cpf: "784.958.456.84",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQFxhfnTfBdo1w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704739892718?e=1732147200&v=beta&t=Vk4DlNgJQ3vEnkuU2NWIjKEnI6XVLfCMoQzG04_aYv8",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Bruno Valdez",
      email: `aa@gmail.com`,
      cpf: "032.658.945.22",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4E03AQFHAuzq9QJBvg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649803431291?e=1732147200&v=beta&t=6H7Y_UWl1gedf69430cRi7RSaUmJ1HQIloGbIjtX8Sk",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Irvane Valdez",
      email: `aa@gmail.com`,
      cpf: "333.555.888-11",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4D03AQH9S0K8R-VyoA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1632254029746?e=1732147200&v=beta&t=QBLMOAMUYYfb-Aagb9wX8P-OX_D1kFvtv5gk09w0yV4",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Eduardo Costa",
      email: `aa@gmail.com`,
      cpf: "958.648.759-61",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4E03AQGKjkJRhko5-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721413774958?e=1732147200&v=beta&t=MW_XiLTjWt9h6DmEpb_DxDtxkyTx6ijvwfnVmQpuNiU",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Pablo Mota",
      email: `aa@gmail.com`,
      cpf: "784.958.456.84",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQFxhfnTfBdo1w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704739892718?e=1732147200&v=beta&t=Vk4DlNgJQ3vEnkuU2NWIjKEnI6XVLfCMoQzG04_aYv8",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Bruno Valdez",
      email: `aa@gmail.com`,
      cpf: "032.658.945.22",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4E03AQFHAuzq9QJBvg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649803431291?e=1732147200&v=beta&t=6H7Y_UWl1gedf69430cRi7RSaUmJ1HQIloGbIjtX8Sk",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      data: "2024-09-19",
      nome: "Irvane Valdez",
      email: `aa@gmail.com`,
      cpf: "333.555.888-11",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4D03AQH9S0K8R-VyoA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1632254029746?e=1732147200&v=beta&t=QBLMOAMUYYfb-Aagb9wX8P-OX_D1kFvtv5gk09w0yV4",
      time: times[5].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => (
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
