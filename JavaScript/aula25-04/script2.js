const botao = document.getElementById("botao");
const contadorElemento = document.getElementById("contador");
const botaoDecremento = document.getElementById("botaoDecremento");
let contador = 0;

botao.addEventListener('click', () =>{
  contador++; //incrementar contador
  contadorElemento.textContent = contador; //Atualiza o texto do contador 
})
botaoDecremento.addEventListener('click', () =>{
  contador--; //incrementar contador
  contadorElemento.textContent = contador; //Atualiza o texto do contador 
})
//O metodo eventListener adiciona um evento ao botão
//que quando clicado, incrementa o contador e atualiza
//o texto do elemento contadorELemento.
//elemento.addEventListerner('evento', funcao, opções);
//Eventos: click, mouseouver, keypress, submit, resize, scroll, etc.
// Funções: Arrow function, function declaration, function expression
// Opções {capture: true, once: true, passive: true}