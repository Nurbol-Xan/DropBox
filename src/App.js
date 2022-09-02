import './App.css';
import { Route, Routes} from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
