import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
  width: 100%;
`;
export const StyledLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #3483fa;
  padding: 2.5px 0;
  transition: all 300ms ease-in-out;

  & + a {
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1.2px solid rgba(0, 0, 0, 0.2);
  }
  &.colorVolver {
    color: rgba(0, 0, 0, 0.8);
  }
`;
