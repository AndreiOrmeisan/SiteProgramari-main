import Navbar from "./components/Navbar";
import LogIn from "./pages/login/login";
import ContulMeu from "./components/ContulMeu.js";
import Dashboard from "./pages/dashboard/dashboard";
import Register from './pages/login/components/register';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import './register.css';

function App () {

  //const [isLoggedIn, setLoggedIn] = useState('');
  //const [register, setRegister] = useState(false);
  //const [info, setInfo] = useState();

  return(
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<LogIn/>}></Route>
          <Route path="/programari" element={<LogIn/>}></Route>
          <Route path="/inregistrare" element={<Register/>}></Route>
          <Route path="/contulmeu" element={<ContulMeu/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
