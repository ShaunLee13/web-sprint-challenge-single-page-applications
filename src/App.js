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
  ///////UseStates//////
  const [ orderForm, setOrderForm ] = useState(initialForm)
  const [ errors, setErrors ] = useState(initialErrors)
  const [ disable, setDisable ] = useState(initialDisable)

  //////Event Handlers//////
  const onInput = evt => {
    const {name, value} = evt.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...errors,
          [name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        });
      });
      setOrderForm({
        ...orderForm,
        [name]: value
      })
  }


  return (
    <Container>
      <AppHeader />
      <Divider />
      <Switch>       
        <Route path='/pizza'>
          <PizzaForm 
          pizza={orderForm} 
          errors={errors}
          disable={disable}
          onInput={onInput}/>
        </Route>
        
        <Route  path='/'>
          <Home />
        </Route>       
      </Switch>
    </Container>
  );
};
export default App;
