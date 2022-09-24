import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './component/homePage';
import Signup from './component/Register/Signup';
import Frgtpassword from './component/forgotPassword/frgtPassword';
import Login from './component/Login/Login';
import Surprisepage from './component/Surprisepage';
import Resetsuccesspage from './component/pswdSuccesspage/Resetsuccesspage';

function App() {
  return (
    <div className="App">
  
    <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/Signup' element={<Signup />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Frgtpassword' element={<Frgtpassword />} />
          <Route exact path='/Surprisepage' element={<Surprisepage />} />
          <Route exact path='/Resetsuccesspage' element={<Resetsuccesspage />} />
        </Routes>
    </Router>

    </div>
  );
}

export default App;
