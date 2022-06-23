import styled from "styled-components";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const Wrapper = styled.div`
  margin-top: 30px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
`;

export const BotonCard = styled.div`
  cursor: pointer;
  text-align: end;
  margin: 30px 10px 20px;
  padding: 30px 10px 20px;
  > a {
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
    justify-content: center;
    text-align: center;
    font-weight: 300;
    margin: 0;
    outline: 0;
    border-radius: 4px;
    padding: 13px 32px 12px;
    outline: 0;
    width: auto;
    min-width: 142px;
    background-color: #3483fa;
    transition: all 300ms ease-in-out;
    border-color: transparent;
    color: #fff;
  }
  & a:hover {
    background-color: #2968c8;
  }
`;

export const BorrarIcon = styled(MdOutlineDeleteOutline)`
  margin-top: -0.5rem;
  width: 22px;
  height: 22px;
  color: red;
  cursor: pointer;
`;
