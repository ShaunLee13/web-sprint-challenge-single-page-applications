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
  },
  instructions:''
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

  //////Network Request//////
  const postOrder = order => {
    axios.post('https://reqres.in/api/users', order)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setOrderForm(initialForm)
      })
  }

  
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
  const onCheck = evt => {
    const { name, checked } = evt.target
    setOrderForm({
      ...orderForm,
      toppings: {
        ...orderForm.toppings,
        [name]: checked,
      }
    })
  }
  const onSubmit = evt => {
    evt.preventDefault()
    const order = {
      name: orderForm.name.trim(),
      size: orderForm.size.trim(),
      toppings: Object.keys(orderForm.toppings)
      .filter(toppingName => 
        orderForm.toppings[toppingName] === true),
      instructions: orderForm.instructions.trim()
    }
    postOrder(order)
  }

  useEffect(() => {
    formSchema.isValid(orderForm).then(valid => {
      setDisable(!valid);
    })
  }, [orderForm])
  
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
          onInput={onInput}
          onCheck={onCheck}
          onSubmit={onSubmit}/>
        </Route>
        
        <Route  path='/'>
          <Home />
        </Route>       
      </Switch>
    </Container>
  );
};
export default App;
