import './App.css';
import { Route, Routes} from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePages';
import Login from "./pages/AuthPage/Login/Login";
import Register from './pages/AuthPage/Register/Register';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
