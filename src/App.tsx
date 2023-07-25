import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import Buys from './components/Buys';

import './App.css';

function App() {

  return (
    <div>
      <div><Toaster position='top-center' reverseOrder={false} /></div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/login/register' element={<Register />} /> 
      <Route path='/Dashboard' element={<DashBoard />} />
      <Route path='/Dashboard/Buys' element={<Buys />}/>
    </Routes>
    </div>
  )
}

export default App
