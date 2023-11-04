import Sidebar from "../components/Sidebar";
import { TitleBar } from "../components/TitleBar";
import "../routes/ProductList.modules.css";
import { useState, useEffect } from "react";

export function ProductList() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch("http://127.0.0.1:8090/products");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TitleBar titulo="Lista de Productos" />
      <div className="vista">
        <Sidebar />
        <table id="products">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            {/* <th>Categoria</th> */}
            <th>Acciones</th>
          </tr>
          <tbody>
            {data.map(function (item){
              return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  {/* <td>{item.category}</td> */}
                  <td>-</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
