import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Modal from "./components/Modal";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Search a blog"></input>
          </div>
          <button onClick={handleOpenModal}>Add New</button>
        </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/:id" element={<BlogDetails />} />
        </Routes>
      </Router>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
