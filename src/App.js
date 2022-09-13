import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from './component/Register/Signup';
import Frgtpassword from './component/forgotPassword/frgtPassword';

function App() {
  return (
    <div className="App">
  
    <Router>
        <Routes>
          <Route exact path='/' element={<Signup />} />
          <Route exact path='/Frgtpassword' element={<Frgtpassword />} />
        </Routes>
    </Router>

    </div>
  );
}

export default App;
