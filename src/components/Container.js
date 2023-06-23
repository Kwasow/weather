import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`
