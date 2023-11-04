import "../components/SearchBar.modules.css";

export function SearchBar(){

    return(
        <div className="buscador">
            <h2>Encuentra el instrumento que buscas</h2>
            <form action="">
                <input type="search" />
                <input type="date" />
                <button>Buscar</button>
            </form>
        </div>

    )
}