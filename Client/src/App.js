import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './component/Login';
import Form from './component/Form';
import Weather from './component/weather';
import '../src/App.css';

const App = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Form" element = {<Form />} />
        <Route path="/weather" element = {<Weather />} />
      </Routes>
    </>

  );
};

export default App;