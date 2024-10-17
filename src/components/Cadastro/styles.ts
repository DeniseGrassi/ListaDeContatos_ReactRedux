import styled from 'styled-components'

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 6px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
