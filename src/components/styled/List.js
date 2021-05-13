import styled from 'styled-components'

export const List = styled.div`
  display: block;
  margin: 0 auto;
`

export const ListHeader = styled.div`
  display: flex;
  height: 30px;
  width: calc(100% - 28px);
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #999;
  font-size: 18px;
  padding: 0 14px;
`

export const ListHeaderTitle = styled.div`
  width: ${props => props.width ? props.width : '100%'};
`

export const ListBody = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 140px);
  flex-direction: column;
  overflow-y: scroll;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 28px);
  padding: 0 14px;
  height: 60px;
  border-bottom: 1px solid #cccc;
  align-items: center;
  flex-shrink: 0;
  cursor: ${props => props.button ? 'pointer' : 'unset'};
  ${props => props.button && '&:hover { background-color: #3331; }'}
`

export const ListItemCTA = styled.div`
  display: flex;
  width: 50px;
  align-self: center;
`

export const ListItemBody = styled.div`
  display: flex;
  width: calc(100% - 132px);
  align-self: center;
  flex-direction: row;
  padding: 0 16px;
`

export const ListItemButtons = styled.div`
  display: flex;
  width: 50px;
  align-self: center;
  justify-content: flex-end;
`

