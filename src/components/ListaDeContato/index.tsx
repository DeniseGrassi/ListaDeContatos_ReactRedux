import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NovoCadastro from '../../components/Cadastro'
import Tarefa from '../../models/ArrayContatos'
import { RootReducer } from '../../Store/index'
import { alterarTermo } from '../../Store/filtroSlice'
import { cadastrar } from '../../Store/contatoSlice'
import * as S from './styles'

const ListaDeCadastro = () => {
  const { itens } = useSelector((state: RootReducer) => state.acao)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContato = () => {
    return itens.filter((item: { nome: string }) =>
      item.nome.toLowerCase().includes(termo.toLowerCase())
    )
  }

  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const cadastroParaAdicionar: Tarefa = {
      id: 0, // O ID será atribuído automaticamente no reducer
      nome,
      email,
      telefone
    }
    dispatch(cadastrar(cadastroParaAdicionar))
    limparCampos()
  }

  const limparCampos = () => {
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <main>
      <div>
        <S.Titulo>Lista de Contatos </S.Titulo>
        <div>
          <S.TituloSec>Localizar contato: </S.TituloSec>
          <S.InputSearch
            type="text"
            value={termo}
            onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />
        </div>
        <div>
          <S.TituloSec>Adicionar contato: </S.TituloSec>
          <S.Formulario onSubmit={cadastrarContato}>
            <S.Input
              value={nome}
              required
              onChange={({ target }) => setNome(target.value)}
              type="text"
              placeholder="Nome completo"
            />
            <S.Input
              value={email}
              required
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              placeholder="E-mail"
            />
            <S.Input
              value={telefone}
              required
              onChange={({ target }) => setTelefone(target.value)}
              type="Tel"
              placeholder="telefone"
            />
            <S.ContainerBotoes>
              <S.Button type="submit">Salvar</S.Button>
              <S.CancelButton type="button" onClick={limparCampos}>
                Cancelar
              </S.CancelButton>
            </S.ContainerBotoes>
          </S.Formulario>
        </div>
        <ul>
          <S.Titulo> Contatos Salvos</S.Titulo>
          {filtraContato().map((p) => (
            <li key={p.id}>
              <NovoCadastro
                id={p.id}
                nome={p.nome}
                email={p.email}
                telefone={p.telefone}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default ListaDeCadastro
