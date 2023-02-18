import React from 'react';
import './App.css';
import { Person } from './components/Person';
import { Country } from './components/Person';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import {Provider} from 'react-redux'
import { store } from './store';

function App() {




  return (
    <div className="App">

<Provider store={store}>

<Router>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='*' element={<h1>Page Not Found</h1>}/>

</Routes>

</Router>

</Provider>



       <Person name="hafida"
          email="faouzi@gmail.com"
          age={22}
          isMarried={false}
          friends={["me","myself","andi"]}
          country={Country.Switzerland}
          
          />
    </div>
  );
}

export default App;
