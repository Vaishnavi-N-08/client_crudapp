// import logo from './logo.svg';
import './App.css';
import AddUser from './component/AddUser';
import NavBar from './component/NavBar';
import CodeForInter from './component/CodeForInter';
import AllUser from './component/AllUser';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<CodeForInter/>}></Route>
          <Route path='/all' element={<AllUser/>}></Route>
          <Route path='/add' element={<AddUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
