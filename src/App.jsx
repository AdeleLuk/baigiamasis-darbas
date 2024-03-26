import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import UsersContext from './contexts/UsersContext';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Forum from './components/pages/Forum';
import Header from './components/UI/Header';
import NewQuestion from './components/pages/NewQuestion';

const App = () => {

  const { loggedInUser } = useContext(UsersContext);
  return (
   <>
     <Header />
     <main>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/forum'>
            <Route path='questions' element={<Forum />}/>
            <Route path='newQuestion' element={
            loggedInUser ? <NewQuestion /> : <Navigate to='/users/login' />}/>
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
