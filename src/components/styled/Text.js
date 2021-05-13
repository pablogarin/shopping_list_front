import styled from 'styled-components'

export const Title = styled.div`
  font-size: 26pt;
  color: #333;
  font-weight: 700;
  line-height: 28pt;
  text-decoration: ${props => props.done ? 'line-through': 'none'};
`

export const Text = styled.div`
  display: ${props => props.display ? props.display : 'inline'};
  ${props => props.display === 'flex' && props.flex && `flex: ${props.flex};`}
  color: ${props => props.color ? props.color :'#333'};
  font-size: ${props => props.size ? props.size : '12pt'};
  width: ${props => props.textWidth ? props.textWidth : '100%'};
  text-align: ${props => props.align ? props.align : 'left'};
  line-height: ${props => props.size ? props.size*1.1 : '14'}pt;
  font-weight: ${props => props.weight ? props.weight : '500'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: ${props => props.decoration ? props.decoration : 'none'};
`

export const Quantity = styled.div`
  color: #3338;
  font-size: 22pt;
  display: inline-block;
`

export const Date = styled.div`
  color: #333;
  font-weight: 500;
`
