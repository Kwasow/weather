import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  border-radius: 50vh;
  border: 0px;
  cursor: pointer;
  color: ${props => props.theme.onPrimary};
  font-size: 0.9rem;
  font-weight: bold;
  padding: 15px;
  text-transform: uppercase;
`
