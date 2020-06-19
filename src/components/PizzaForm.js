import React from 'react'
import { Input, Form } from 'semantic-ui-react'

const PizzaForm = props => {
    const { pizza, errors, disable, onInput, onSubmit } = props


    return (
        <div>
            <Form>
                <Form.Field inline>
                    <label>First Name:</label>
                    <Input 
                        placeholder='Name' 
                        name='name'
                        value={pizza.name}
                        error={{content:errors.name, pointing:'left'}}
                        onChange={onInput}
                    />
                </Form.Field>
            </Form>
        </div>
    )
}

export default PizzaForm