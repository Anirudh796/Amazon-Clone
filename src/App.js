import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
      auth.onAuthStateChanged(authUser => {
        console.log('The User is >>> ', authUser);
        if(authUser){
             // the user was logged in
             dispatch({
              type: 'SET_USER',
              user: authUser
             })
        }else{
             // the user is logged out
             dispatch({
              type: 'SET_USER',
              user: null
             })
        }
      })
  },[])
  return (
    //BEM
    <BrowserRouter>
    <div className="app">
      <Routes>
      <Route exact path="/" element={[<Header/>,<Home/>]}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
