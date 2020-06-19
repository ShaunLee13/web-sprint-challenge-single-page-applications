import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'
import Header from "./components/Header";

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


const App = () => {
  const [ orderForm, newOrderForm ] = useState(initialForm)

  return (
    <div>
      <Header />
      <Switch>
        {/* 
        <Route>
          <Form path='/form/' orderForm={orderForm}>
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
