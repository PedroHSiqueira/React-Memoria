import { useForm } from "react-hook-form";
import { useState } from "react";
import _ from "lodash";
import "./App.css";

let lista = ["cpp","css","docker","html","java","javascript","php","python","react","typescript",];
let embralhado = _.shuffle(lista);

function App() {
  const { register, handleSubmit } = useForm();

  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
  const [img5, setImg5] = useState(false);
  const [img6, setImg6] = useState(false);
  const [img7, setImg7] = useState(false);
  const [img8, setImg8] = useState(false);
  const [img9, setImg9] = useState(false);
  const [img10, setImg10] = useState(false);
  const [nome, setNome] = useState("")
  const [valor, setValor] = useState()
  const [premio, setPremio] = useState()
  const [start, setStart] = useState(false);
  const [alvo, setAlvo] = useState();
  const [final, setFinal] = useState("");
  let [tentativa, setTentativas] = useState(0);

  function aleatorio() {
    return Math.floor(Math.random() * 10);
  }

  function restart() {
    setTimeout(() => {
      alert("Jogo Finalizado, Reiniciando ...");
      window.location.reload()
    }, 1000);
  }

  function comecarJogo() {
    if (start) {
      alert("Jogo já estava em andamento, Ele sera reiniciado");
      window.location.reload();
    }

    setStart(true);
    setImg1(true);
    setImg2(true);
    setImg3(true);
    setImg4(true);
    setImg5(true);
    setImg6(true);
    setImg7(true);
    setImg8(true);
    setImg9(true);
    setImg10(true);
    setAlvo("./" + embralhado[aleatorio()] + ".svg");
  }

  function recebeDados(dados) {
    const dobro = Number(dados.valor * 2)
    setNome(dados.nome);
    setValor(dobro.toLocaleString("pt-br", { minimumFractionDigits: 2 }));
  }

  function clickImagem1(){
      const elemento = document.getElementById("1");
      const src = elemento.getAttribute("src");
      setImg1(false);

      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[1].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)")
          setStart(false);
          restart();
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }

    function clickImagem2(){
      const elemento = document.getElementById("2");
      const src = elemento.getAttribute("src");
      setImg2(false);

      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[2].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)")
          setStart(false);
          restart();
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }

    function clickImagem3(){
      const elemento = document.getElementById("3");
      const src = elemento.getAttribute("src");
      setImg3(false);

      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[3].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)" )
          setStart(false);
          setPremio("Prêmio de R$ " + valor)
          restart();
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }

    function clickImagem4(){
      const elemento = document.getElementById("4");
      const src = elemento.getAttribute("src");
      setImg4(false);

      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[4].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)")
          setStart(false);
          setPremio("Prêmio de R$ " + valor)
          restart();
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }

    function clickImagem5(){
      const elemento = document.getElementById("5");
      const src = elemento.getAttribute("src");
      setImg5(false);
      
      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[5].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)")
          setStart(false);
          setPremio("Prêmio de R$ " + valor)
          restart();
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }

    function clickImagem6(){
      const elemento = document.getElementById("6");
      const src = elemento.getAttribute("src");
      setImg6(false);

      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[6].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)")
          setStart(false);
          setPremio("Prêmio de R$ " + valor)
          restart();
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }
    function clickImagem7(){
      const elemento = document.getElementById("7");
      const src = elemento.getAttribute("src");
      setImg7(false);

      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[7].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)")
          setStart(false);
          setPremio("Prêmio de R$ " + valor)
          restart();
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }

    function clickImagem8(){
      const elemento = document.getElementById("8");
      const src = elemento.getAttribute("src");
      setImg8(false);

      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[8].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)")
          setStart(false);
          setPremio("Prêmio de R$ " + valor)
          restart();
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }

    function clickImagem9(){
      const elemento = document.getElementById("9");
      const src = elemento.getAttribute("src");
      setImg9(false);

      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[9].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)")
          setStart(false);
          setPremio("Prêmio de R$ " + valor)
          restart();
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }

    function clickImagem10(){
      const elemento = document.getElementById("10");
      const src = elemento.getAttribute("src");
      setImg10(false);

      if (start === true) {
        if (src === alvo) {
          setFinal("Parabéns! " + nome +  " você achou a tecnologia " + embralhado[0].toLocaleUpperCase() + " em " + tentativa + " Tentativa(s)")
          setStart(false);
          setPremio("Prêmio de R$ " + valor)
          restart(); 
        } else {
          setTentativas((tentativa += 1));
        }
      }
    }
  


  return (
    <>
      <header className="navbar bg-danger ">
        <div className="container-fluid ">
          <p className="navbar-brand text-white m-0">
            <img src="./logo.png" alt="Logo" width={50} height={40} className="d-inline-block mx-3 me-3"/>
            Jogo da Memoria de Programação
          </p>
        </div>
      </header>

        <main className="card mt-5 w-75 mx-auto">
          <div className="card-header">
            <form className="row my-3" onSubmit={handleSubmit(recebeDados)}>
              <div className="col">
                <input type="text" className="form-control" placeholder="Nome do apostador" required {...register("nome")}/>
              </div>

              <div className="col">
                <input type="number" className="form-control" placeholder="Aposta R$" required step={0.01} {...register("valor")}/>
              </div>
              <div className="col d-flex justify-content-start">
                <button className="btn btn-danger" type="submit" onClick={comecarJogo}>Apostar</button>
              </div>
            </form>
          </div>

          <div className="card-body">
            <h4 className="text-danger"> Procure por este Simbolo: <img src={alvo} className=" mx-3 " id="alvo"/></h4>
            <div className=" row mt-3">
              <div className="col">
                <img id="1" src={ img1 == true ? "./verso.svg" : "./" + embralhado[1] + ".svg" } onClick={clickImagem1}/>
              </div>
              <div className="col">
                <img id="2" src={ img2 == true ? "./verso.svg" : "./" + embralhado[2] + ".svg" } onClick={clickImagem2}/>
              </div>
              <div className="col">
                <img id="3" src={ img3 == true ? "./verso.svg" : "./" + embralhado[3] + ".svg" } onClick={clickImagem3}/>
              </div>
              <div className="col">
                <img id="4" src={ img4 == true ? "./verso.svg" : "./" + embralhado[4] + ".svg"} onClick={clickImagem4}/>
              </div>
              <div className="col">
                <img id="5" src={ img5 == true ? "./verso.svg" : "./" + embralhado[5] + ".svg" } onClick={clickImagem5}/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <img id="6" src={ img6 == true ? "./verso.svg" : "./" + embralhado[6] + ".svg"} onClick={clickImagem6}/>
              </div>
              <div className="col">
                <img id="7" src={ img7 == true ? "./verso.svg" : "./" + embralhado[7] + ".svg"} onClick={clickImagem7}/>
              </div>
              <div className="col">
                <img id="8" src={ img8 == true ? "./verso.svg" : "./" + embralhado[8] + ".svg"} onClick={clickImagem8}/>
              </div>
              <div className="col">
                <img id="9" src={ img9 == true ? "./verso.svg" : "./" + embralhado[9] + ".svg"} onClick={clickImagem9}/>
              </div>
              <div className="col">
                <img id="10" src={ img10 == true ? "./verso.svg" : "./" + embralhado[0] + ".svg"} onClick={clickImagem10}/>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <h3 className="text-success">&nbsp;{final}</h3>
            <h3 className="text-success">&nbsp;{premio}</h3>
          </div>
        </main>
    </>
  );
}

export default App;
