import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes} from "react-router-dom";
import { checkIsLogged } from "./redux/actionCreators/authActionCreator";
import './App.css';
import { Login, Register, HomePage, DashboardPage } from './pages';
import  NavigationComponent from './components/HomePageComponents/NavigationComponent';




const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(checkIsLogged());
    }
  , [dispatch]);

  return (
    <div className="App">
      <NavigationComponent />      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
