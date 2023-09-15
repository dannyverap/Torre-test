import { Routes, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { Favorites } from "./views/Favorites";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </main>
  );
}

export default App;
