import { useState } from "react";
import List from "../List";
import Search from "../Search";
import "./App.css";



const data = ['HTML', 'CSS', 'JS', 'TS', 'React', 'Vue', 'Angular', 'NodeJS'];

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      salom
    <Search value={search} onChange={e => setSearch(e.target.value)}>
      Find course:
      </Search>  
    <List items={data}/>
    </div>
  );
}

export default App;
