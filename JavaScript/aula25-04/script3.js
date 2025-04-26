window.onload = function () {//Ao carregar o script será executado
  const botao = document.getElementById("btnTrocaCor");
  function geraCorAleatoria (){//Função para gerar uma cor aleatória
    const letras = '0123456789ABCDEF';//Letras e números que podem ser usados HEXA
    let cor='#';//Inícializa a cor com o símbolo #
    for(let i=0;i<6;i++){//Loop que gera 6 caracteres aleatórios
      cor+=letras[Math.floor(Math.random()*16)];//Sorteia aleatoriamente uma das letras
      //multiplica por 16 pois random vai de 0 ate 1, portanto vai de 0 a 16
    }
    return cor; //retorna a cor gerada para quem a chamou
  }

  botao.addEventListener('click', function () {//houve o click do botao
    const novacor = geraCorAleatoria();// chama a função que gera cor 
    document.body.style.backgroundColor=novacor; //passou a cor para o fundo do HTML 

  });




}