
import { ProductBody } from "../components/ProductBody";
import { TitleBar } from "../components/TitleBar";
import flecha from "../images/ico-flecha.png";
import data from "../data";
import "../routes/ProductDetail.modules.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Gallery } from "../components/Gallery";


export function ProductDetail() {
  const { id } = useParams();
  const [detalle, setDetalle] = useState([]);

  function getData() {
    //data.id = id;
    const response = data[id-1];
    setDetalle(response);
  }
  //console.log(detalle.titulo);

  useEffect(() => {
    getData();
  });

 
    const handleGoBack = () => {
      window.history.back();
    };
  
  return (
    <div className="block">
      <TitleBar titulo="Características del Producto" />
      <a href="#" className="flecha" onClick={handleGoBack}>
      <img src={flecha} alt="" /></a>
      <ProductBody
        img_src={detalle.img}
        titulo={detalle.titulo}
        categoria={detalle.categoria}
        descripcion={detalle.descripcion}
        caracteristicas="Lorem ipsum dolor sit amet."
        precio={detalle.precio}
      >
        {/* <Gallery img_src={detalle.img} /> */}
        </ProductBody>
      
      
    </div>
  );
}
