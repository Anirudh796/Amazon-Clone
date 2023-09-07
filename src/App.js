import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders'

const promise = loadStripe("pk_test_51NmzOwSFKkOFh8maibfKqp3d2rPAsxv0VT14n1bzhx3vRzCMALPYKmVw89QKcETsAv0NF93tFHUXQitGCTxwcKn600SGLVyGw1");


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
      <Route path="/orders" element={[<Header/>,<Orders/>]}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
      <Route path="/payment" element={[<Header/>,<Elements stripe={promise}><Payment/></Elements>]}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
