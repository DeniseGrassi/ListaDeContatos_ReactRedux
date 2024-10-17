import styled from 'styled-components'

// disposição do meu formulario em linha
export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 3px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`

export const Button = styled.button`
  background: green;
  color: #fff;
  border: none;

  padding: 8px;
  border-radius: 9px;
  width: 100px;
  height: 35px;

  &:hover {
    background: #32cd32;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CancelButton = styled(Button)`
  background-color: red;
  width: 100px;
  height: 35px;
  &:hover {
    background: #ff6347;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  line-height: 15px;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  color: #111;
`

export const InputSearch = styled(Input)`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Titulo = styled.h1`
  text-align: center;
`
export const TituloSec = styled.h2`
  margin-top: 16px;
`
