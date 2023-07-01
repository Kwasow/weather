import styled from 'styled-components'

export const CenterHorizontal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const CenterVertical = styled(CenterHorizontal)`
  flex-direction: row;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`
