import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

export const TabHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
`

export const TabContent = styled.div`
`

export const Tab = styled.button`
  display: flex;
  flex: 1 1 0;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  border: 1px solid #3333;
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  background-color: ${props => props.active ? '#ccc' : '#fff'};
`
