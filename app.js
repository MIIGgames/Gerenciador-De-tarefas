const form = document.querySelector('form');
const listaTarefas = document.querySelector('#lista-tarefas');

// Carregar dados do armazenamento local, se existir
if (localStorage.getItem('itens')) {
  listaTarefas.innerHTML = localStorage.getItem('itens');
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const inputTarefa = form.tarefa;
  const inputImagem = form.imagem;
  
  if (!inputTarefa.value || !inputImagem.files[0]) {
    alert('Por favor, preencha os dois campos.');
    return;
  }
  
  const novoItem = document.createElement('li');
  
  const novaDiv = document.createElement('div');
  
  const novaTarefa = document.createElement('span');
  novaTarefa.textContent = inputTarefa.value;
  
  const novaImagem = document.createElement('img');
  novaImagem.src = URL.createObjectURL(inputImagem.files[0]);
  
  const botaoExcluir = document.createElement('button');
  botaoExcluir.textContent = 'Excluir';
  botaoExcluir.addEventListener('click', function(e) {
    e.target.parentNode.parentNode.remove();
    // Salvar itens no armazenamento local
    localStorage.setItem('itens', listaTarefas.innerHTML);
  });
  
  novaDiv.appendChild(novaTarefa);
  novaDiv.appendChild(novaImagem);
  novaDiv.appendChild(botaoExcluir);
  
  novoItem.appendChild(novaDiv);
  listaTarefas.appendChild(novoItem);

  // Salvar itens no armazenamento local
  localStorage.setItem('itens', listaTarefas.innerHTML);

  form.reset();
});

inputImagem.addEventListener('change', function(e) {
  const novaImagem = document.createElement('img');
  novaImagem.src = URL.createObjectURL(inputImagem.files[0]);
  listaTarefas.appendChild(novaImagem);
});
