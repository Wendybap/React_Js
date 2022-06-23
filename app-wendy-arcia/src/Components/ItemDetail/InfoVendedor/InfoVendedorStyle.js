import styled, { css } from "styled-components";
import { IoMdRibbon } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiMessage } from "react-icons/bi";
import { WiTime9 } from "react-icons/wi";
import { Link } from "react-router-dom";

const iconosCss = css`
  height: 22px;
  width: 22px;
`;
export const Container = styled.div`
  padding: 32px 16px;
  margin: 17px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 18px;
    line-height: 22.5px;
    margin-bottom: 28px;
    color: rgba(0, 0, 0, 0.9);
  }
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  > div {
    margin-left: 5px;

    > {
      p {
        font-size: 16px;
        line-height: 21.6px;
        color: rgba(0, 0, 0, 0.9);
        margin: 0;
      }
      span {
        font-size: 14px;
        line-height: 18.9px;
        color: rgba(0, 0, 0, 0.55);
      }
    }
    .colorSubtitulo {
      color: #00a650;
    }
  }
`;

export const UbicacionIcon = styled(MdOutlineLocationOn)`
  fill: rgba(0, 0, 0, 0.9);
  margin-top: -1.6rem;
  opacity: 0.8;
  ${iconosCss}
`;

export const MedallaIcon = styled(IoMdRibbon)`
  color: #00a650;
  margin-top: -1.6rem;
  ${iconosCss}
`;
export const Reputacion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Cajas = styled.ol`
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  padding: 0 4px;
  > li {
    width: 100%;
    height: 8px;
    margin-top: 2px;
    /* border: 1px solid red; */

    &:nth-child(1) {
      background-color: #fff0f0;
    }
    &:nth-child(2) {
      background-color: #fff5e8;
    }
    &:nth-child(3) {
      background-color: #fffcda;
    }
    &:nth-child(4) {
      background-color: #f1fdd7;
    }
    &:nth-child(5) {
      background-color: #39b54a;

      &.activa {
        height: 12px;
        margin: 0;
      }
    }
  }
`;

export const Row = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    text-align: center;
    position: relative;
    width: 100%;

    > strong {
      color: #000;
      display: block;
      font-size: 24px;
      font-weight: normal;
      line-height: 1;
      margin-top: 8px;
      height: 30px;
    }
    > span {
      font-size: 12px;
      text-align: center;
      margin-top: 8px;
      line-height: 1;
      color: rgba(0, 0, 0, 0.9);
    }

    & + div {
      &::after {
        content: "";
        background: #ddd;
        height: 91%;
        position: absolute;
        left: 0;
        top: 8%;
        width: 1px;
      }
    }
  }
`;
export const ApoyoIcon = styled(BiMessage)`
  ${css}
`;
export const RelojIcon = styled(WiTime9)`
  ${css}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  margin-top: 24px;
  color: #3483fa;
`;
