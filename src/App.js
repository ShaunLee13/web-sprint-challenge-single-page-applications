import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import Header from "./components/Header";
import formSchema from './validation/formSchema'
import * as Yup from 'yup'
import axios from 'axios'

const initialForm = {
  name:'',
  size:'',
  toppings: {
    pepperoni: false,
    blackOlives: false,
    mushrooms: false,
    sausage: false
  }
}
const initialErrors = {
  name:'',
}
const initialDisable = true


const App = () => {
  const [ orderForm, newOrderForm ] = useState(initialForm)
  const [ errors, setErrors ] = useState(initialErrors)
  const [ disable, setDisable ] = useState(initialDisable)

  return (
    <div>
      <Header />
      <Switch>
        {/* 
        <Route path='/form/'>
          <Form 
          orderForm={orderForm} 
          errors={errors}>
          disable={disable}
        </Route>
        
        <Route>
          <Home>
        </Route path='/'> 
        */}
      </Switch>
    </div>
  );
};
export default App;
