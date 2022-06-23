import styled from "styled-components";

export const Container = styled.div`
  padding-left: 16px;
  margin-bottom: 24px;
`;
export const Wrapper = styled.div`
  margin-top: 8px;
  min-height: auto;
  .textoPrecio {
    font-size: 24px;
    text-align: left;
    line-height: 24px;
    letter-spacing: normal;
    color: #333333;
  }
  .textoNombre {
    font-size: 18px;
    text-align: left;
    line-height: 18.2px;
    letter-spacing: normal;
    color: #333333;
  }
  .textoLeyenda {
    font-size: 14px;
    text-align: left;
    line-height: 14px;
    letter-spacing: normal;
    color: #00a650;
    background-color: #e6f7ee;
    border-radius: 3px;
    font-weight: bold;
    width: 60%;
  }
`;

export const BotonCard = styled.div`
  margin-top: 16px;
  display: flex;
  cursor: pointer;
  > a {
    text-decoration: none;
    font-size: 14px;
    justify-content: center;
    text-align: center;
    font-weight: 750;
    border-radius: 4px;
    padding: 12px 10px;
    outline: 0;
    width: 100%;
    height: 100%;
    background-color: #3483fa;
    transition: all 300ms ease-in-out;
    border-color: transparent;
    color: #fff;
  }
  & a:hover {
    background-color: #2968c8;
  }
`;
