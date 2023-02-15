import './App.css';
import  {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import {Home} from "./pages/Home"
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { Profile } from './pages/Profile';
import { useState,createContext } from 'react';

export const AppContext=createContext()

function App() {
const [Username,SetUsername]=useState("Hafida")

return (
    <div className="App">
      <AppContext.Provider value={{Username,SetUsername}}>
<Router>
   <Navbar/>
<Routes>
  <Route path="/" element={<Home Username={Username} />} />
  <Route path="/menu" element={<Menu/>} />
  <Route path="/profile" element={<Profile Username={Username} SetUsername={SetUsername} />} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

</Routes>


</Router>
</AppContext.Provider>

    </div>
  );
}

export default App;
