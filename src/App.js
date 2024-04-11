

import SignUpPage from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from "./components/success";
import Content from "./components/Content";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="/" element={<SignUpPage/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/content" element={<Content/>}/>
          <Route path="/home" element={<Home/>}/>
          
      </Routes>
    </Router>
    </div>
  );
}



export default App;
