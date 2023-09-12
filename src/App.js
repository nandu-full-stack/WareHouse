import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import WareHouseList from './component/wareHouseList';
import Update from './component/Update';
import Read from './component/Read';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WareHouseList/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
