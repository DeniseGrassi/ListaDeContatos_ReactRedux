import { useEffect, useState } from 'react'
import ArrayContatos from '../../models/ArrayContatos'
import { useDispatch } from 'react-redux'
import { editar } from '../../Store/contatoSlice'
import { Formulario } from './styles'

type Props = ArrayContatos

const NovoCadastro = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal || '')
  const [email, setEmail] = useState(emailOriginal || '')
  const [telefone, setTelefone] = useState(telefoneOriginal || '')

  const Submeter = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ nome, email, telefone })
  }

  useEffect(() => {
    setNome(nomeOriginal)
  }, [nomeOriginal])

  useEffect(() => {
    setEmail(emailOriginal)
  }, [emailOriginal])

  useEffect(() => {
    setTelefone(telefoneOriginal)
  }, [telefoneOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <main>
      <Formulario onSubmit={Submeter}>
        <input
          type="text"
          placeholder="Digite o seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Digite o seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Digite o seu telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        {estaEditando ? (
          <>
            <button
              type="button"
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </button>
            <button type="button" onClick={cancelarEdicao}>
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={() => setEstaEditando(true)}>
              Editar
            </button>
            <button type="button">Remover</button>
          </>
        )}
      </Formulario>
    </main>
  )
}

export default NovoCadastro
