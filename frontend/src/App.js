import { Route, Routes } from "react-router-dom";
import Blog from "./component/Blog";
import Header from "./component/Header";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>

    </div>
  );
}

export default App;
