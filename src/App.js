import './App.css';
import Main from './component/pages/Main';
import Elder from './component/pages/Elder';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  console.log(process.env.REACT_APP_API)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/sec" element={<Elder/>} />
      </Routes>
      
    </div>
  );
}

export default App;
