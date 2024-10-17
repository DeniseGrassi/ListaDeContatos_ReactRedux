// src/App.tsx
import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import store from './Store'

import ListaContatos from './components/ListaDeContato'

const App = () => {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
