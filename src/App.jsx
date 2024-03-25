import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Forum from './components/pages/Forum';
import Header from './components/UI/Header';

const App = () => {
  return (
   <>
     <Header />
     <main>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/forum'>
            <Route path='questions' element={<Forum />}/>
          </Route>
          <Route path='/users'>
              <Route path="login" element={<Login />}/>
              <Route path="register" element={<Register />}/>
          </Route>
        </Routes>
     </main>
   </>
  );
}

export default App;
