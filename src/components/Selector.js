import Select from 'react-select'
import styled from 'styled-components'

export const StyledSelector = styled(Select)`
  width: 20%;

  .react-select__control {
    background-color: ${props => props.theme.surface};
  }

  .react-select__control:hover {
    border-color: ${props => props.theme.primary};
  }

  .react-select__control--is-focused {
    border-color: ${props => props.theme.primary};
  }

  .react-select__input-container {
    color: ${props => props.theme.onBackground}
  }

  .react-select__input-container {
    color: ${props => props.theme.onBackground}
  }

  .react-select__single-value {
    color: ${props => props.theme.onBackground}
  }

  .react-select__option {
    color: ${props => props.theme.onBackground};
  }

  .react-select__option:hover {
    background-color: ${props => props.theme.primarySelected};
  }

  .react-select__option--is-focused {
    background-color: ${props => props.theme.primarySelected};
  }

  .react-select__option--is-selected {
    background-color: ${props => props.theme.primarySelected};
  }

  .react-select__menu {
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.onSurface};
    border: 1px solid ${props => props.theme.onBackgroundBorder};
    border-opacity: 50%;
  }
`
