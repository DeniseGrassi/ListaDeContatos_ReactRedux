import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif, ;
  }
`
export const Container = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    margin: 20px;
  }
`

export default EstiloGlobal
