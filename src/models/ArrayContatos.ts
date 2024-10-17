class ArrayContatos {
  nome: string
  email: string
  telefone: string
  id: number

  constructor(nome: string, email: string, telefone: string, id: number) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}
export default ArrayContatos

// A palavra-chave class é usada para definir uma classe em TypeScript (ou JavaScript).
//  A classe ArrayContatos serve como um "molde" para criar objetos que representem uma tarefa ou contato, com propriedades e comportamento específicos.
//  O construtor é uma função especial que é chamada quando uma nova instância da classe Tarefa é criada.
//  Ele recebe como parâmetros os valores para cada uma das propriedades e os atribui às variáveis da instância usando o this.
// this.nomeContato = nomeContato: Atribui o valor passado ao parâmetro nomeContato para a propriedade nomeContato da instância.
