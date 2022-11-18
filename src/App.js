import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import RegisterList from "./components/RegisterList";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegisterList />} />
            <Route path="/add" element={<RegisterForm />} />
            <Route path="/edit/:id" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
