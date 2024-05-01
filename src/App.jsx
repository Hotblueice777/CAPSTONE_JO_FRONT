import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
         <Header />
          <Routes> 




         </Routes> 
       </BrowserRouter> 
     
    </div>
  );
}

export default App;
