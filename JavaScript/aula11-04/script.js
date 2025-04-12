let registros=[]; //Coleção dos registros vetor, array, matriz;

document.getElementById("cadastroForm").addEventListener("submit", 
  function(event){event.preventDefault();
    let cliente={
      nome: document.getElementById("nome").value,
      endereco: document.getElementById("endereco").value,
      bairro: document.getElementById("bairro").value,
      cidade: document.getElementById("cidade").value,
      uf: document.getElementById("uf").value,
      fone: document.getElementById("fone").value,
      email: document.getElementById("email").value,
    }
    registros.push(cliente);
    document.getElementById("mensagem").textContent=("Texto incluido com sucesso")
    this.reset();
    exibirCadastros();

});

function exibirCadastros(){
  let lista = document.getElementById("lista");//Lista do HTML
  lista.innerHTML="";//Vazia
  registros.forEach((cliente, index)=>{//For Each é para cada cliente
    let item = document.createElement("li");//Cria um item na lista
    item.textContent=`${index+1}.Nome: ${cliente.nome}, Cidade: ${cliente.cidade}`;
    lista.appendChild(item);//Acrescenta na lista
  });
}