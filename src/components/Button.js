import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  border-radius: 50vh;
  border: 0px;
  cursor: pointer;
  color: ${props => props.theme.onPrimary};
  font-size: 1.2rem;
  padding: 10px;
`
