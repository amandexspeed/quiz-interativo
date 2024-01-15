import { useState,useRef } from 'react'
import  { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [data,setData] = useState(null);

  const perguntas = [
    {
      "pergunta": "Qual é a capital do Brasil?",
      "alternativas": [
        "Rio de Janeiro",
        "São Paulo",
        "Brasília",
        "Salvador",
        "Recife"
      ],
      "resposta": "c" 
    },
    {
      "pergunta": "Qual é o maior osso do corpo humano?",
      "alternativas": [
        "Fêmur",
        "Úmero",
        "Tíbia",
        "Rádio",
        "Fíbula"
      ],
      "resposta": "a"
    },
    {
      "pergunta": "Qual é o nome do maior rio do mundo em extensão?",
      "alternativas": [
        "Nilo",
        "Amazonas",
        "Yangtzé",
        "Mississipi",
        "Congo"
      ],
      "resposta": "b" 
    },
    {
      "pergunta": "Qual é o nome do autor de Dom Casmurro?",
      "alternativas": [
        "Machado de Assis",
        "José de Alencar",
        "Aluísio Azevedo",
        "Lima Barreto",
        "Monteiro Lobato"
      ],
      "resposta": "a" 
    },
    {
      "pergunta": "Qual é o nome do maior deserto do mundo?",
      "alternativas": [
        "Saara",
        "Gobi",
        "Atacama",
        "Kalahari",
        "Antártica"
      ],
      "resposta": "e" 
    },
    {
      "pergunta": "Qual é o nome da moeda oficial da União Europeia?",
      "alternativas": [
        "Euro",
        "Libra",
        "Franco",
        "Dólar",
        "Iene"
      ],
      "resposta": "a" 
    },
    {
      "pergunta": "Qual é o nome do maior animal do mundo?",
      "alternativas": [
        "Elefante",
        "Girafa",
        "Baleia azul",
        "Tubarão branco",
        "Dinossauro"
      ],
      "resposta": "c" 
    },
    {
      "pergunta": "Qual é o nome do maior planeta do sistema solar?",
      "alternativas": [
        "Terra",
        "Saturno",
        "Júpiter",
        "Urano",
        "Netuno"
      ],
      "resposta": "c"
    },
    {
      "pergunta": "Qual é o nome do menor país do mundo em área?",
      "alternativas": [
        "Mônaco",
        "Vaticano",
        "Nauru",
        "San Marino",
        "Liechtenstein"
      ],
      "resposta": "b" 
    },
    {
      "pergunta": "Qual é o nome do inventor da lâmpada elétrica?",
      "alternativas": [
        "Thomas Edison",
        "Alexander Graham Bell",
        "Nikola Tesla",

        "Isaac Newton",
        "Albert Einstein"
      ],
      "resposta": "a" 
    },
    {
      "pergunta": "Qual é o nome do maior oceano do mundo?",
      "alternativas": [
        "Atlântico",
        "Pacífico",
        "Índico",
        "Ártico",
        "Antártico"
      ],
      "resposta": "b" 
    },
    {
      "pergunta": "Qual é o nome do primeiro presidente do Brasil?",
      "alternativas": [
        "Deodoro da Fonseca",
        "Floriano Peixoto",
        "Prudente de Morais",
        "Campos Sales",
        "Getúlio Vargas"
      ],
      "resposta": "a" 
    },
    {
      "pergunta": "Qual é o nome do maior continente do mundo em área?",
      "alternativas": [
        "África",
        "América",
        "Europa",
        "Ásia",
        "Oceania"
      ],
      "resposta": "d" 
    },
    {
      "pergunta": "Qual é o nome do maior país do mundo em área?",
      "alternativas": [
        "China",
        "Estados Unidos",
        "Canadá",
        "Brasil",
        "Rússia"
      ],
      "resposta": "e" 
    },
    {
      "pergunta": "Qual é o nome do maior vulcão do mundo em altura?",
      "alternativas": [
        "Vesúvio",
        "Etna",
        "Krakatoa",
        "Mauna Loa",
        "Cotopaxi"
      ],
      "resposta": "d" 
    },
    {
      "pergunta": "Qual é o nome do maior estádio de futebol do mundo em capacidade?",
      "alternativas": [
        "Maracanã",
        "Camp Nou",
        "Wembley",
        "Azteca",
        "Rungrado May Day"
      ],
      "resposta": "e" 
    },
    {
      "pergunta": "Qual é o nome do maior escritor brasileiro de todos os tempos, segundo a Academia Brasileira de Letras?",
      "alternativas": [
        "Machado de Assis",
        "Carlos Drummond de Andrade",
        "Guimarães Rosa",
        "Jorge Amado",
        "Ariano Suassuna"
      ],
      "resposta": "a" 
    },
    {
      "pergunta": "Qual é o nome do maior pintor brasileiro de todos os tempos, segundo o Museu de Arte Moderna de São Paulo?",
      "alternativas": [
        "Cândido Portinari",
        "Tarsila do Amaral",
        "Di Cavalcanti",
        "Anita Malfatti",
        "Romero Britto"
      ],
      "resposta": "a" 
    },
    {
      "pergunta": "Qual é o nome do maior cientista brasileiro de todos os tempos, segundo a Sociedade Brasileira para o Progresso da Ciência?",
      "alternativas": [
        "Oswaldo Cruz",
        "Carlos Chagas",
        "César Lattes",
        "Vital Brazil",
        "Santos Dumont"
      ],
      "resposta": "c"
    },
    {
      "pergunta": "Qual é o nome do maior cantor brasileiro de todos os tempos, segundo a revista Rolling Stone Brasil?",
      "alternativas": [
        "Roberto Carlos",
        "Caetano Veloso",
        "Chico Buarque",
        "Tim Maia",
        "Tom Jobim"
      ],
      "resposta": "d" 
    },
    {
      "pergunta": "Qual é o nome do maior jogador de futebol brasileiro de todos os tempos, segundo a FIFA?",
      "alternativas": [
        "Pelé",
        "Garrincha",
        "Zico",
        "Ronaldo",
        "Neymar"
      ],
      "resposta": "a" 
    },
    {
      "pergunta": "Qual é o nome do maior filme brasileiro de todos os tempos, segundo a Academia Brasileira de Cinema?",
      "alternativas": [
        "Cidade de Deus",
        "Tropa de Elite",
        "Central do Brasil",
        "O Auto da Compadecida",
        "O Pagador de Promessas"
      ],
      "resposta": "c" 
    },
    {
      "pergunta": "Qual é o nome do maior monumento brasileiro de todos os tempos, segundo o Instituto do Patrimônio Histórico e Artístico Nacional?",
      "alternativas": [
        "Cristo Redentor",
        "Teatro Amazonas",
        "Pelourinho",
        "Congresso Nacional",
        "Ouro Preto"
      ],
      "resposta": "a"
    },
    {
      "pergunta": "Qual é o nome do maior estado brasileiro em área?",
      "alternativas": [
        "Minas Gerais",
        "Bahia",
        "Pará",
        "Amazonas",
        "Mato Grosso"
      ],
      "resposta": "d" 
    },
    {
      "pergunta": "Qual é o nome do maior planeta-anão do sistema solar?",
      "alternativas": [
        "Plutão",
        "Ceres",
        "Éris",
        "Haumea",
        "Makemake"
      ],
      "resposta": "c" 
    },
    {
      "pergunta": "Qual é o nome do maior satélite natural do sistema solar?",
      "alternativas": [
        "Lua",
        "Io",
        "Europa",
        "Titã",
        "Ganimedes"
      ],
      "resposta": "e" 
    },
    {
      "pergunta": "Qual é o nome do maior país do mundo em população?",
      "alternativas": [
        "China",
        "Índia",
        "Estados Unidos",
        "Indonésia",
        "Brasil"
      ],
      "resposta": "a" 
    },
    {
      "pergunta": "Qual é o nome do maior dinossauro do mundo em comprimento?",
      "alternativas": [
        "Tiranossauro Rex",
        "Braquiossauro",
        "Diplodoco",
        "Espinossauro",
        "Argentinossauro"
      ],
      "resposta": "e" 
    },
    {
      "pergunta": "Qual é o nome do maior prêmio da literatura mundial?",
      "alternativas": [
        "Nobel",
        "Pulitzer",
        "Booker",
        "Goncourt",
        "Camões"
      ],
      "resposta": "a" 
    }
  ];

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
    /* // cria um efeito para carregar os dados do JSON
      axios.get("src/perguntas.json") // faz a requisição GET ao arquivo JSON
        .then((response) => {
          // se a requisição for bem sucedida
          setData(response.data); // salva os dados do JSON no estado
          
        })
        .catch((error) => {
          // se a requisição falhar
          console.error(error); // mostra o erro no console
        }); */

        setData(perguntas)
      
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
