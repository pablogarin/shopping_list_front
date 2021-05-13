import styled from "styled-components";

export const DialogContainer = styled.div`
  display: block;
  position: absolute;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #3333;
`

export const DialogCard = styled.div`
  display: flex;
  width: 80%;
  max-width: 400px;
  min-height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #3333;
  border-radius: 2px;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

export const DialogHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid #3333;
`

export const DialogBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-bottom: 40px;
  flex: auto;
  & > * {
    flex: 1 1 0;
  }
`

export const DialogActions = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #3333;
  & > button {
    flex: 1 1 0;
    border: none;
    border-radius: 0;
    background: transparent;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-weight: 700;
    color: #333333FA;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid #3333;
    }
    &:hover {
      background-color: #3333;
    }
  }
`


