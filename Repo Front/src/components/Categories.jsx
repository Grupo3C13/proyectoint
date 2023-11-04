import "../components/Categories.modules.css";
import { CategoriesCard } from "./CategoriesCard";
import accesorios from "../images/accesorios.jpg";
import cuerda from "../images/cuerda.jpg";
import percusion from "../images/percusion.jpg";
import viento from "../images/viento.jpg";

export function Categories(){

    return(
//Esto esta hardcoded, hay que conectarlo despues con el Back y este con la BDD
        <div >
            <h3>Categorias de instrumentos</h3>
            <div className="categorias">
                <CategoriesCard 
                    titulo="Accesorios" //Ej: titulo= {accesorios.title}?
                    img_src={accesorios} 
                    descripcion="Gran variedad de accesorios"
                />
                <CategoriesCard 
                    titulo="Cuerda"
                    img_src={cuerda}
                    descripcion="Instrumentos de cuerda"
                />
                <CategoriesCard 
                    titulo="Percusión"
                    img_src={percusion}
                    descripcion="Instrumentos de percusión"
                />
                <CategoriesCard 
                    titulo="Viento"
                    img_src={viento}
                    descripcion="Instrumentos de viento"
                />
            </div>

        </div>
    )
}

/*window.addEventListener('load', function () {
    (function(){

      const url = '/categories';
      const settings = {
        method: 'GET'
      }

      fetch(url,settings)
      .then(response => response.json())
      .then(data => {

         for(category of data){

            var table = document.getElementById("categoriesTable");
            var categoryRow =table.insertRow();
            let tr_id = 'tr_' + category.id;
            categoryRow.id = tr_id;

            categoryRow.innerHTML =

                    '<td class=\"td_id\">' + category.id + '</td>' +
                    '<td class=\"td_nombre\">' + category.nombre.toUpperCase() + '</td>' +
                    '<td class=\"td_nombre\">' + category.apellido.toUpperCase() + '</td>' +
                    '<td class=\"td_nombre\">' + category.matricula.toUpperCase() + '</td>' +
                    '<td>' + deleteButton + '</td>' +
                    '<td>' + updateButton + '</td>';

        };

    })
    })

    (function(){
      let pathname = window.location.pathname;
      if (pathname == "/get_all_categories.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })

    })
*/