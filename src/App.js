import './App.css';
import Main from './component/pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  console.log(process.env.REACT_APP_API)
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
