import styled from "styled-components";

export const Garantia = styled.div``;

export const Secction = styled.div`
  padding: 32px 16px;
  margin: 0 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  /* border-bottom: none; */

  > h1 {
    color: rgba(0, 0, 0, 0.9);
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 28px;
    width: 100%;
    line-height: 22.5px;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 18.9px;

    /* span + span es para que tome esto estilos a partir del 2do span */
    span {
      margin-bottom: 24px;
    }
    .titulo {
      font-size: 16px;
      line-height: 21.6px;
      color: rgba(0, 0, 0, 0.9);
      margin-bottom: 12px;
    }
    .descripcion {
      font-size: 14px;
      line-height: 18.9px;
      color: rgba(0, 0, 0, 0.55);
    }
    > a {
      font-size: 14px;
      color: #3483fa;
      text-decoration: none;
    }
  }
`;
