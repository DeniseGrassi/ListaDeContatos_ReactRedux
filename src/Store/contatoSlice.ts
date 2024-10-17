import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ArrayContatos from '../models/ArrayContatos'

// Este código define um slice do Redux utilizando o @reduxjs/toolkit, que facilita o gerenciamento do estado global da aplicação,
// fornecendo uma maneira simples de criar um "pedaço" de estado junto com as ações (actions) e funções redutoras (reducers) para modificá-lo

type AcoesStates = {
  // Esta interface define o formato do estado que será gerenciado pelo slice. geralmente usa um models.
  itens: ArrayContatos[]
}

// initialState: Define o estado inicial do slice, ou seja, o valor com que o estado começa.
const initialState: AcoesStates = {
  itens: [
    {
      nome: 'Denise Grassi',
      email: 'denygrassi_@hotmail.com',
      telefone: '(71)99962-2155',
      id: 1
    },
    {
      nome: 'Pietro Grassi',
      email: 'pipog@hotmail.com',
      telefone: '(71)99962-2130',
      id: 2
    }
  ]
}

const acoesSlice = createSlice({
  name: 'acoes',
  initialState,
  reducers: {
    // A função remover é um dos reducers definidos dentro do createSlice do Redux Toolkit.
    // O createSlice ajuda a gerar automaticamente ações e reducers para gerenciar o estado.
    // action: A ação que dispara a função. Contém informações adicionais que são passadas quando a ação é chamada, como o payload, que aqui é do tipo number.
    // Esse número representa o id da tarefa que será removida.
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    },
    // O método filter cria um novo array com todos os itens que atendem à condição fornecida.
    // A condição (atividade.id !== action.payload) faz com que apenas as tarefas cujo id não seja igual ao id fornecido pelo payload permaneçam no array.
    // O item com o id igual ao payload será excluído da lista porque não passa no filtro.
    // Após o filtro, a lista state.itens é atualizada para conter apenas as tarefas restantes, ou seja, aquelas que não foram removidas.
    // Essa operação de "atualização" é feita de forma imutável, pois o método filter retorna um novo array, em vez de modificar o array original.
    editar: (state, action: PayloadAction<ArrayContatos>) => {
      const indexDaArray = state.itens.findIndex(
        (p) => p.id === action.payload.id
      ) //O parâmetro p representa cada item individual dentro do array state.itens.
      //O método findIndex percorre o array itens procurando a tarefa que tenha o mesmo id que o id da tarefa passada no payload.
      // Verificação do índice encontrado:
      if (indexDaArray >= 0) {
        //Essa linha verifica se o índice da tarefa é válido, ou seja, se a tarefa foi encontrada.
        // O índice será maior ou igual a 0 se a tarefa existir no array.
        // Atualizando a tarefa:
        state.itens[indexDaArray] = action.payload
        //Se a tarefa foi encontrada (o índice é válido), ela é substituída pelo objeto action.payload, que contém os novos dados da tarefa.
        //Dessa forma, a tarefa no estado é atualizada com as novas informações.
      }
    },
    //A ação cadastrar é responsável por add um novo contato à lista de contatos, mas apenas se já não houver um contato com o mesmo nome.
    cadastrar: (state, action: PayloadAction<ArrayContatos>) => {
      const cadastroJaExiste = state.itens.some(
        (p) => p.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      //state.itens.some(...): O método SOME verifica se pelo menos um contato no array itens atende à condição passada.
      //Ele retorna true se encontrar um contato que atenda à condição e false caso contrário.
      if (cadastroJaExiste) {
        alert('Já existe um contato com este nome')
      } else {
        //Se não houver um contato com o mesmo nome, o código gera um novo id para o contato e o adiciona à lista:
        const novoId =
          state.itens.length > 0
            ? state.itens[state.itens.length - 1].id + 1
            : //Se o array state.itens não estiver vazio (state.itens.length > 0), o id do novo contato será o id do último contato da lista (state.itens[state.itens.length - 1].id) mais 1.
              1 //Se a lista estiver vazia (primeiro contato a ser adicionado), o novo id será 1.
        //Depois de gerar o novo id, o código adiciona o novo contato ao array state.itens:
        state.itens.push({ ...action.payload, id: novoId })
      } //O novo contato é adicionado ao array de contatos itens usando o método push.
      //O operador spread (...) copia todos os dados do payload (nome, e-mail, telefone, etc.) e o id é atribuído com o valor de novoId.
    }
  }
})
export const { remover, editar, cadastrar } = acoesSlice.actions
export default acoesSlice.reducer

// Diferença entre findIndex e filter:
// findIndex:
// Propósito: Encontra o índice do primeiro elemento que corresponde à condição especificada.
// Resultado: Retorna o índice do elemento ou -1 se nenhum elemento for encontrado.
// Eficiência: Para encontrar apenas um elemento, ele para de procurar assim que encontra o primeiro item correspondente, o que o torna mais eficiente em alguns casos.
//const indexDaTarefa = state.itens.findIndex(
//   (p) => p.id === action.payload.id
// )
//Isso retorna o índice da tarefa que possui o id igual ao payload.id. Se for encontrado, ele pode ser diretamente substituído no array.

//filter:
// Propósito: Cria um novo array contendo todos os elementos que correspondem à condição especificada.
// Resultado: Retorna um array de elementos, mesmo que apenas um elemento atenda à condição, ou um array vazio se nenhum for encontrado.
// Eficiência: filter percorre todo o array, mesmo após encontrar um item correspondente, porque o seu objetivo é retornar todos os itens que satisfaçam a condição.
//const tarefas = state.itens.filter(
//   (atividade) => atividade.id === action.payload.id
// )
//Isso retorna um novo array com todos os itens que tenham o id igual ao payload.id.
//Mesmo que apenas um item seja encontrado, o resultado será um array.
