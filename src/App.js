import './App.css';
import Sidebar from './Pages/Sidebar';
import Info from './Pages/Info';
import Plan from './Pages/Plan';
import Add from './Pages/Add';
import Summary from './Pages/Summary';
import Successful from './Pages/Successful';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/'>
        <Route index element={<Info />} />
        <Route path="plan" element={<Plan />} />
        <Route path="add" element={<Add />} />
        <Route path="summary" element={<Summary />} />
        <Route path='successful' element={<Successful />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
