import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import AppHeader from "./components/AppHeader";
import formSchema from './validation/formSchema'
import * as Yup from 'yup'
import axios from 'axios'
import PizzaForm from './components/PizzaForm'
import Home from './components/Home'
import { Container, Divider } from 'semantic-ui-react'

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
    <Container>
      <AppHeader />
      <Divider />
      <Switch>       
        <Route path='/pizza'>
          <PizzaForm 
          pizza={orderForm} 
          errors={errors}
          disable={disable}/>
        </Route>
        
        <Route  path='/'>
          <Home />
        </Route>       
      </Switch>
    </Container>
  );
};
export default App;
