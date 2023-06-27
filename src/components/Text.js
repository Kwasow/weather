import styled from 'styled-components'

export const Header = styled.p`
  color: ${props => props.theme.onBackground};
  font-size: 1.5rem;
  font-weight: bold;
`

export const Text = styled.p`
  color: ${props => props.theme.onBackground};
`

export const TextNoPadding = styled(Text)`
  padding: 0;
  margin: 0;
`

export const TextSecondary = styled.p`
  color: ${props => props.theme.onBackground};
  opacity: 60%;
`

export const TextSecondaryNoPadding = styled(TextSecondary)`
  padding: 0;
  margin: 0;
`
