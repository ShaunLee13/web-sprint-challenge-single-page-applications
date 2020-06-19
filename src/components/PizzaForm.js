import React from 'react'
import { Input, Form } from 'semantic-ui-react'

const PizzaForm = props => {
    const { pizza } = props


    return (
        <div>
            <Form>
                <Form.Field inline>
                    <label>First Name:</label>
                    <Input placeholder='Name' />
                </Form.Field>
            </Form>
        </div>
    )
}

export default PizzaForm