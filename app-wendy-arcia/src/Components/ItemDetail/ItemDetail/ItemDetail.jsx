import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount";
import {
  Container,
  Panel,
  Column,
  Galeria,
  DetalleProducto,
  Estado,
  Row,
  Precio,
  Cantidad,
  CorazonIcon,
  Card,
  CamionIcon,
  FlechaIcon,
  Beneficios,
  EscudoIcon,
  CopaIcon,
  BotonCard,
} from "./ItemDetailStyle";
import DescripcionProducto from "../DescripcionProducto/DescripcionProducto";
import Garantia from "../Garantia/Garantia";
import InformacionVendedor from "../InfoVendedor/InformacionVendedor";

export default function ItemDetail({ producto }) {
  const [numero, setNumero] = useState(0);
  function onAdd(contador) {
    setNumero(contador);
  }

  return (
    <>
      <Container>
        <Panel>
          <Column>
            <Galeria>
              <img src={producto.imagen} alt={producto.nombre} width="400" />
            </Galeria>
            <DescripcionProducto
              tituloDescripcion={producto.tituloDescripcion}
              parrafo1={producto.parrafo1}
              parrafo2={producto.parrafo2}
              parrafo3={producto.parrafo3}
              parrafo4={producto.parrafo4}
              parrafo5={producto.parrafo5}
              caracteristicas={producto.caracteristicas}
              caracteristica1={producto.caracteristica1}
              caracteristica2={producto.caracteristica2}
              caracteristica3={producto.caracteristica3}
              caracteristica4={producto.caracteristica4}
              caracteristica5={producto.caracteristica5}
              caracteristica6={producto.caracteristica6}
              medidas={producto.medidas}
              hombre={producto.hombre}
              hombreS={producto.hombreS}
              hombreM={producto.hombreM}
              hombreL={producto.hombreL}
              hombreXL={producto.hombreXL}
              hombreXXL={producto.hombreXXL}
              parrafo6={producto.parrafo6}
              parrafo7={producto.parrafo7}
              parrafo8={producto.parrafo8}
              parrafo9={producto.parrafo9}
              parrafo10={producto.parrafo10}
              parrafo11={producto.parrafo11}
              parrafo12={producto.parrafo12}
              mujer={producto.mujer}
              mujerS={producto.mujerS}
              mujerM={producto.mujerM}
              mujerL={producto.mujerL}
            />
          </Column>
          <Column>
            <DetalleProducto>
              <Estado>{producto.estado}</Estado>
              <Row>
                <h2>{producto.descripcion}</h2>
                <CorazonIcon />
              </Row>
              {/* <EstrellasIcon /> */}
              <Precio>
                $ {producto.precio}
                <p>{producto.cuotas}</p>
              </Precio>
              <Card>
                <CamionIcon />
                <div>
                  <span className="titulo">{producto.leyenda}</span>
                  <span className="detalle">{producto.leyendaDetalle}</span>
                  <Link to="#" className="link">
                    Ver más formas de entrega
                  </Link>
                </div>
              </Card>
              <Card>
                <FlechaIcon />
                <div>
                  <span className="titulo">Devolución gratis</span>
                  <span className="detalle">{producto.devolucion}</span>
                  <Link to="#" className="link">
                    Conocer más
                  </Link>
                </div>
              </Card>
              <Cantidad>
                <h4>Stock disponible {producto.stock}</h4>
                <span>Cantidad</span>
                {numero === 0 ? (
                  <ItemCount
                    producto={producto}
                    stock={producto.stock}
                    onAdd={onAdd}
                    className="mb-3"
                  />
                ) : (
                  <BotonCard>
                    <Link to="/cart">Comprar ahora</Link>
                  </BotonCard>
                )}
              </Cantidad>
              <Beneficios>
                <li>
                  <EscudoIcon />
                  <p>
                    <span>Compra Protegida, </span> recibí el producto que
                    esperabas o te devolvemos tu dinero.
                  </p>
                </li>
                <li>
                  <CopaIcon />
                  <p>
                    <span>Mercado Puntos. </span>
                    {producto.mercadoPuntos}
                  </p>
                </li>
              </Beneficios>
            </DetalleProducto>
            <InformacionVendedor
              ubicacion={producto.ubicacion}
              numeroVentas={producto.numeroVentas}
            />
            <Garantia />
          </Column>
        </Panel>
      </Container>
    </>
  );
}
