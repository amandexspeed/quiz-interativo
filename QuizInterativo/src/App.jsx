import { useState,useRef } from 'react'
import  { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [data,setData] = useState(null);

  const ordemPerg = sortear();
  var jogada = 0;
  const quiz = document.querySelector(".quiz");
  const resp = document.querySelector(".respUsu");
  const msg = document.getElementById("msg");
  var pontuacao = 0;
  

  function carregaPergunta(){
    console.log("entrou")
    document.getElementById('perg').textContent=data[ordemPerg[jogada]].pergunta;
    document.getElementById('p1').textContent=data[ordemPerg[jogada]].alternativas[0];
    document.getElementById('p2').textContent=data[ordemPerg[jogada]].alternativas[1];
    document.getElementById('p3').textContent=data[ordemPerg[jogada]].alternativas[2];
    document.getElementById('p4').textContent=data[ordemPerg[jogada]].alternativas[3];
    document.getElementById('p5').textContent=data[ordemPerg[jogada]].alternativas[4];

  }

  function sortear() {
    var numeros = [];
    // Preenche um array com os números de 0 ao maximo
    for (var numero = 0; numero < 29; numero++) {
      numeros.push(numero);
    }
    // Ordena o array de forma aleatória
    numeros.sort(function randomizar(a, b) {
      return Math.random() * 2 - 1;
    });
    // Retorna um subarray com a quantidade desejada
    //return numeros.splice(0, quantidade);
    return numeros;
  }

  function carregaOpc(elemento){

    console.log(elemento.target.value);
    if(data[ordemPerg[jogada]].resposta == elemento.target.value){
      
      msg.innerHTML="Você Acertou!";
      pontuacao = pontuacao + 100;
      document.getElementById("pontuacao").innerHTML=`Pontuação: ${pontuacao}`

    }else{

      msg.innerHTML="Você Errou!";

    }
    elemento.target.checked=false;
    resp.classList.toggle("load");
    quiz.classList.toggle("load");
    jogada++;
    if(jogada<28){

      
      setTimeout(function MudaTela(){
        carregaPergunta();
        resp.classList.toggle("load");
        quiz.classList.toggle("load");
      },2000)

    }else{

      msg.textContent="Quiz finalizado";

    }

    
  }; 

  useEffect(() => {
    // cria um efeito para carregar os dados do JSON
      axios.get("src/perguntas.json") // faz a requisição GET ao arquivo JSON
        .then((response) => {
          // se a requisição for bem sucedida
          setData(response.data); // salva os dados do JSON no estado
          
        })
        .catch((error) => {
          // se a requisição falhar
          console.error(error); // mostra o erro no console
        });
      
  }, []);

  useEffect(()=>{

    if(data!=null){
    
      carregaPergunta();
    
    }
  },[data])

  

  console.log(data);
  console.log(ordemPerg);
    
  return (
    <>
      
      <main>

        <div className='pontuacao'>

          <p id='pontuacao'>Pontuação: {pontuacao}</p>

        </div>

        <div className='respUsu'>

          <h1 id='msg'>Você acertou! </h1>
          

        </div>

        <div className='quiz load'>

          <h1>Quiz interativo</h1>

          <h3 id='perg'>Pergunta</h3>
          
          <div className='boxControl'>

            <label htmlFor="opc1" >
                <div id='box1' className='box'>
                <p id='p1'>Teste 1</p>
                <input type="radio" name="pergunta" id="opc1" value="a" className='inputs' onChangeCapture={carregaOpc} />
                </div>
            </label>

            <label htmlFor="opc2">
                <div id='box2' className='box'>
                  <p id='p2'>Teste 2</p>
                  <input type="radio" name="pergunta" id="opc2" value="b" className='inputs' onChangeCapture={carregaOpc} />
                </div>
            </label>

            <label htmlFor="opc3">
              <div id='box3' className='box'>
                <p id='p3'>Teste 3</p>
                <input type="radio" name="pergunta"  id="opc3" value="c" className='inputs' onChangeCapture={carregaOpc} />
              </div>
            </label>


            <label htmlFor="opc4">
              <div id='box4' className='box'>
                <p id='p4'>Teste 4</p>
                <input type="radio" name="pergunta" id="opc4" value="d" className='inputs' onChangeCapture={carregaOpc} />
              </div>
            </label>

            <label htmlFor="opc5">
              <div id='box5' className='box'>
                <p id='p5'>Teste 5</p>
                <input type="radio" name="pergunta" id="opc5" value="e" className='inputs' onChangeCapture={carregaOpc} />
              </div>
            </label>

          </div> 
        </div> 

      </main>
    </>
  )
}
export default App
