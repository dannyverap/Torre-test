import { Routes, Route } from "react-router-dom";

import { Home } from "./views/Home";

function App() {
  return (
    <main >
      <Routes >
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </main>
  );
}

export default App;