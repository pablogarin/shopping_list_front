import styled from "styled-components";

export const Fab = styled.button`
  border: 0;
  border-radius: 50%;
  background-color: #3E68FF;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: #fff;
  font-weight:500;
  font-size: 48px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export const MoreButton = styled.button`
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  &:after {
    display: block;
    content: "...";
    position: absolute;
    width: 100%;
    height: 40px;
    line-height: 18px;
    font-size: 40px;
    top: 1px;
    left: 0;
    transform: rotate(-90deg);
    font-family: ui-monospace;
  }
  &:hover, &:active {
    background-color: #3333;
  }
`
