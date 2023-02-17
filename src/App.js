import './App.css';
import  {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import {Home} from "./pages/Home"
import { Menu } from './pages/Menu';
import { Form} from './pages/Form';
import { Text } from './pages/Text';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { Profile } from './pages/Profile';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { useCounter } from './pages/useCounter';

function App() {
const {val,increase,decrease,restart}=useCounter()
const client=new QueryClient({defaultOptions:{
queries:{
  refetchOnWindowFocus:false
}

}});
return (
    <div className="App">
      <QueryClientProvider client={client}>
<Router>
   <Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/text" element={<Text/>} />
  <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

</Routes>


</Router>
</QueryClientProvider>

<button onClick={increase}>
INCREASE
</button>
<button onClick={decrease}>
DECREASE
</button>
<button onClick={restart}>
  RESTART
  </button>
  <h1>{val}</h1> 
    </div>

  );
}

export default App;
