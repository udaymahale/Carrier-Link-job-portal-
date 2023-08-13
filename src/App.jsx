/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Components/FooterDiv/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";
import Jobs from "./Components/JobDiv/Jobs";
import Value from "./Components/ValueDiv/Value";

const App = () => {
  return (
    <div className="max-h-[760px] max-w-[1660px] mx-auto bg-cover bg-center" 
      style={{ backgroundImage: `url('https://sarayconsult.com/wp-content/uploads/2023/04/saray-consult-home-2048x995.jpg')` }}>
      <NavBar/>  
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  );
};

export default App;
