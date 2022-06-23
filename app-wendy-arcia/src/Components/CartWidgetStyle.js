import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";

export const Carro = styled.div`
  .contCarrito {
    position: relative;
  }
  .carrito {
    position: absolute;
    top: 2.3rem;
    right: 1rem;
    width: 1.3rem;
    height: 1.3rem;
    border: 1px solid #3483fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;
    padding: 0rem;
    font-size: 0.9rem;
    font-weight: 549;
    /* background-color: #3483fa; */
  }
  .carrito:hover {
    border: 1px solid #2968c8;
  }
`;
export const CardIcon = styled(BsCart2)`
  width: 24px;
  height: 24px;
  /* font-size: 14px; */
  margin-top: 35px;
  padding-top: 2px;
  color: #333333;
`;

// export const Card = styled.div``;

// export const CardIcon = styled(BsCart2)`
//   position: relative;
//   font-size: 16px;
//   margin-top: 35px;
//   padding-top: 2px;
//   color: #333333;
//   display: inline-block;
//   width: 24px;
//   height: 22px;
//   > div {
//     position: absolute;
//     top: -0.8rem;
//     right: -0.8rem;
//     width: 1.3rem;
//     height: 1.3rem;
//     border: 1px solid red;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #333333;
//     padding: 0rem;
//     font-size: 0.6rem;
//     font-weight: 700;
//     background-color: crimson;
//   }
// `;
