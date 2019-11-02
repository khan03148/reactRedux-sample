import React from 'react';

import './App.css';

import {BrowserRouter,Route , Switch} from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';

import {Logout , SignIn } from './actions/actionsTypes';


function App() {
  // we store over Redcucers in varible to access easily so that why we use const
  const counter = useSelector(state=> state.Counter);
  const loger = useSelector(state=> state.loger);
  
  const dispatch = useDispatch();
  
  // we can not see boolean in browers ui that why we use console.log
  console.log(loger.login);


  return (
  
    <div className="App" >
      <h1>Hello word {counter}</h1>
      <p> {loger.name}</p>
     
      {/* we send our data by click and the send it as in dispatch funtion to Redcucers
      so logout funtion check it first its action from actions.js and the send to reducers */}
      <button onClick={() => { dispatch(Logout()) }}>change me!</button>
      <button onClick={() => { dispatch(SignIn()) }}>SignIn!</button>
    </div>
   
  );
}


export default App;
