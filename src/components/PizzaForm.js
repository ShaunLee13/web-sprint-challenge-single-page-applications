import React from 'react'
import { Input, Form, Select, Button } from 'semantic-ui-react'

const sizeOptions = [
    {text:'Small', value:'Small'},
    {text:'Medium', value:'Medium'},
    {text:'Large', value:'Large'}
]

const PizzaForm = props => {
    const { 
        pizza, 
        errors, 
        disable, 
        onInput, 
        onSubmit,
        onCheck
    } = props


    return (
        <div>
            <div className='errors'>
                <span>{errors.name}</span>
                <span>{errors.size}</span>
            </div>
            <Form  onSubmit={onSubmit}>
                <Form.Field inline>
                    <label>First Name:</label>
                    <Input 
                        placeholder='Name' 
                        name='name'
                        value={pizza.name}
                        onChange={onInput}
                    />
                </Form.Field>
                <Form.Field inline>
                    <label>Pizza Size:</label>
                    <select 
                        name='size'
                        value={pizza.size}
                        onChange={onInput}>
                        <option value=''>Select a Size</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </Form.Field>
                <Form.Group grouped>
                    <label>Toppings</label>
                    <Form.Field 
                    control='input'
                    label='Pepperoni' 
                    name='pepperoni' 
                    type='checkbox' 
                    onChange={onCheck}
                    checked={pizza.toppings.pepperoni}
                    />

                    <Form.Field 
                    control='input'
                    label='Black Olives' 
                    name='blackOlives' 
                    type='checkbox' 
                    onChange={onCheck}
                    checked={pizza.toppings.blackOlives}
                    />

                    <Form.Field 
                    control='input'
                    label='Mushrooms' 
                    name='mushrooms' 
                    type='checkbox' 
                    onChange={onCheck}
                    checked={pizza.toppings.mushrooms}
                    />

                    <Form.Field 
                    control='input'
                    label='Sausage' 
                    name='sausage' 
                    type='checkbox' 
                    onChange={onCheck}
                    checked={pizza.toppings.sausage}
                    />
                </Form.Group>
                <Form.Field 
                id='instructions'
                name='instructions'
                value={pizza.value} 
                label='Special Instructions?' 
                control='input' rows='3' 
                onChange={onInput}
                />
                <Button className='orderBtn' disabled={disable}>Add to Order!</Button>
            </Form>
        </div>
    )
}

export default PizzaForm