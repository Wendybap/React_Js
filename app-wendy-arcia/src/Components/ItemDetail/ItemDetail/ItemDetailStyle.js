import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi";
import { BsArrowReturnLeft } from "react-icons/bs";
// import { HiOutlineCheckCircle } from "react-icons/hi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { IoTrophyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const Panel = styled.div`
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 67fr 33fr;
`;

export const Column = styled.div``;

export const Galeria = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;

  > img {
    height: 75%;
    cursor: zoom-in;
  }
`;

// Estilos de Detalle del producto

export const DetalleProducto = styled.div`
  padding: 24px 16px;
  margin: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
export const Estado = styled.div`
  font-size: 14px;
  line-height: 18.9px;
  color: rgba(0, 0, 0, 0.55);
  /* font-weight: 400;
  white-space: pre-wrap; */
  margin-bottom: 8px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  > h2 {
    width: 100%;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 25.96px;
    font-weight: 545;
  }
`;
export const CorazonIcon = styled(BsHeart)`
  color: #3483fa;
  cursor: pointer;
  margin-left: 16px;
  height: 22px;
  width: 22px;
`;
export const Precio = styled.div`
  font-size: 36px;
  line-height: 36px;
  color: rgba(0, 0, 0, 0.8);
  padding: 24px 0;
  /* font-weight: inherit; */
  > p {
    font-size: 18px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.8);
  }
`;
export const Card = styled.div`
  display: flex;
  margin-bottom: 5px;
  > div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    .titulo {
      font-size: 16px;
      line-height: 1.3;
      margin-top: 5px;
      color: #00a650;
    }
    .detalle {
      font-size: 14px;
      line-height: 1.29;
      color: rgba(0, 0, 0, 0.55);
      margin-top: 5px;
    }
    .link {
      margin-top: 5px;
      font-size: 14px;
      text-decoration: none;
      color: #3483fa;
    }
    .link:hover {
      color: #2968c8;
    }
  }
`;
export const CamionIcon = styled(HiOutlineTruck)`
  color: #00a650;
  margin-top: -0.5rem;
  width: 40px;
  height: 40px;
`;

export const FlechaIcon = styled(BsArrowReturnLeft)`
  color: #00a650;
  width: 18px;
  margin-top: 0.3rem;
`;

export const Cantidad = styled.div`
  margin-top: 3rem;
  /* display: flex; */
  justify-content: start;
  align-items: center;
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  > h4 {
    font-size: 16px;
    font-weight: 600;
  }
  > span {
    font-size: 16px;
    padding-right: 1rem;
    margin: 0 0.5rem;
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
export const StyledLink = styled(Link)``;
export const Color = styled.div``;

export const Beneficios = styled.div`
  text-align: start;
  margin-top: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    margin-top: 1rem;
  }
  p {
    margin-left: 10px;
    font-size: 14px;
    line-height: 1.3;
    margin-bottom: 2px;
    color: rgba(0, 0, 0, 0.55);
  }
  span {
    color: #3483fa;
  }
  span:hover {
    color: #2968c8;
    cursor: pointer;
  }
`;

export const EscudoIcon = styled(HiOutlineShieldCheck)`
  width: 30px;
  height: 30px;
  color: rgba(0, 0, 0, 0.55);
  margin-top: -0.3rem;
`;

export const CopaIcon = styled(IoTrophyOutline)`
  width: 18px;
  height: 18px;
  color: rgba(0, 0, 0, 0.55);
  margin-top: -0.1rem;
`;
