import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const ItemListBanner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_615504-MLA49983701494_052022-OO.webp"
            alt="Productos XBOX colores verde, gris y blanco"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_803667-MLA49922986745_052022-OO.webp"
            alt="Productos de belleza colores rosa y blanco"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_677041-MLA49983670801_052022-OO.webp"
            alt="Productos en oferta por tiempo limitado 40% off, fondo azul y blanco"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_736800-MLA49913051466_052022-OO.webp"
            alt="Productos de todo para su hogar 35% off, colores gris y blanco"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_806755-MLA49935397251_052022-OO.webp"
            alt="Especial tablets y accesorios 20% off, colores azul, blanco, negro y rosa"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_829378-MLA50358786855_062022-OO.webp"
            alt="Imagen de cobra con Point Smart con fondo azul y blanco, colores azul, celeste y blanco"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
