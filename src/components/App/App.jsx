import { useState, useEffect } from "react";
import List from "../List";
import Search from "../Search";
import "./App.css";

const data = ["HTML", "CSS", "JS", "TS", "React", "Vue", "Angular", "NodeJS"];

function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data.filter((item) => item.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim(""))));
  }, [search]);
  return (
    <div className="App">
      <Search value={search} onChange={(e) => setSearch(e.target.value)}>
        Find course:
      </Search>
      <List items={items} />
    </div>
  );
}

export default App;
