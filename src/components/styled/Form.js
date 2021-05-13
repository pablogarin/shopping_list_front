import styled from 'styled-components'

export const Form = styled.form`
  display: block;
  padding: 20px;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #3336;
  padding: 8px 0;
  margin: 8px auto;
  border-radius: 0;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &[disabled] {
    border: none;
    background: transparent;
    text-align: center;
  }
`

export const Button = styled.button`
  display: block;
  border: 1px solid #3336;
  background-color: ${props => props.color ? props.color : '#6AF'};
  color: ${props => props.text && props.text.color ? props.text.color : '#333E'};
  text-transform: uppercase;
  padding: 8px 12px;
  border-radius: 3px;
  margin: 8px auto;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: ${props => props.size ? props.size : 40}px;
  height: ${props => props.size ? props.size : 40}px;
  display: block;
  border: 1px solid #3333;
  border-radius: 2px;
  position: relative;
  &:checked {
    background-color: ${props => props.color ? props.color : '#8CF'};
    &:after {
      display: block;
      content: " ";
      clip-path: polygon(1% 61%, 14% 44%, 41% 68%, 84% 8%, 100% 20%, 43% 100%);
      background-color: ${props => props.checkColor ? props.checkColor : '#6FAF'};
      width: 100%;
      height: 100%;
    }
  }
`
