
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Departments from './components/Departments'
import Reg from './components/Reg'
import Appoint from './components/Appoint'
import Menu from "./Pages/Menu";

import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Departments' element={<Departments/>}/>
      <Route path='/Reg' element={<Reg/>}/>
      <Route path='/appoint' element={<Appoint/>}/>
      <Route path="/menu" element={<Menu/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
