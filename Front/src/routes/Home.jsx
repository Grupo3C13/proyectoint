import { Categories } from "../components/Categories";
import { Recommends } from "../components/Recommends";
import { SearchBar } from "../components/SearchBar";

import "../routes/Home.modules.css";
import "../routes/Home.jsx";

export function Home() {
  return (
    <div className="home">
      
      <SearchBar/>
      <Categories />
      <Recommends/>
    </div>
  );
}
