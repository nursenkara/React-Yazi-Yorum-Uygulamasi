import React from "react";
import YaziListesi from "./components/YaziListesi";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import YaziDetayi from "./components/YaziDetayi";

function App() {
  
  return (
   
    
    <div className="main_wrapper">
      <header></header>
      <div className="ui raised very padded text container segment">
      <BrowserRouter>
        <Routes>
       <Route path="/" element={<YaziListesi />}/>
       <Route path="/posts/:id" element={<YaziDetayi />}/>
       </Routes>
       </BrowserRouter>
      </div>
    </div>
   
  );
}

export default App;
