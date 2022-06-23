import React from "react";
import { Container, StyledLink } from "./ItemDetailHeaderStyle";

export default function ItemDetailHeader() {
  return (
    <Container>
      <div>
        <StyledLink className="colorVolver" to="/">
          Volver al Listado
        </StyledLink>
        <StyledLink to="/">Ropa y Accesorios</StyledLink>
        <StyledLink to="/category/Zapatillas">Calzados</StyledLink>
        <StyledLink to="/category/Remeras">Remeras y Musculasas</StyledLink>
        <StyledLink to="/category/Carteras">Carteras y Bolsos</StyledLink>
        <StyledLink to="#">Hombre</StyledLink>
        <StyledLink to="#"> Mujer </StyledLink>
      </div>
      <div>
        <StyledLink to="#"> Compartir </StyledLink>
        <StyledLink to="#">Vender uno igual</StyledLink>
      </div>
    </Container>
  );
}
