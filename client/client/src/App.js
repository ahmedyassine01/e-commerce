
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignUp } from './Components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Components/Login';
import Profile from './Components/Profile';
import AddProduct from './Components/Admin/AddProduct';
import EditProduct from './Components/Admin/EditProduct';
import { Navbar } from './Components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Components/home';




function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Router>
<Navbar/>
        <Routes>
        <Route index={true} element={<Home />} />
          <Route  path='/' element={<SignUp />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/addProduct" element={<AddProduct/>} />
          <Route path='/updateProduct/:_id' element={<EditProduct/>}/>
        </Routes>
      </Router>
    </div>
    </ChakraProvider>
  );
}

export default App;
