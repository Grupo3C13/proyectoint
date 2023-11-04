import Sidebar from "../components/Sidebar";
import "../routes/PanelAdmin.modules.css";

export function PanelAdmin() {
  return (
    <>
      <div className="menu">
        <Sidebar />
      </div>
      <div className="mensaje-de-advertencia">
        <p>
          Este sitio no está optimizado para pantallas de tamaño pequeño. Por
          favor, utiliza una pantalla de tamaño medio o superior.
        </p>
      </div>
    </>
  );
}
