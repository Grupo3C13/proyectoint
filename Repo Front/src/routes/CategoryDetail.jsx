import { ProductCard } from "../components/ProductCard";
import { TitleBar } from "../components/TitleBar";
import instrumentos from "../images/instrumentos.jpg";
import "../routes/CategoryDetail.modules.css";

export function CategoryDetail() {
  return (
    <div className="block">
      <TitleBar titulo="Productos de la Categoría" />
      <div className="card_container">
      <ProductCard
        img_src={instrumentos}
        titulo="Lorem ipsum"
        descripcion="Lorem ipsum dolor sit amet."
        precio="$550"
      />
      <ProductCard
        img_src={instrumentos}
        titulo="Lorem ipsum"
        descripcion="Lorem ipsum dolor sit amet."
        precio="$550"
      />
      </div>
    </div>
  );
}
