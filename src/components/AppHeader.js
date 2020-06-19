import React from 'react'
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom'
import { Menu, Header } from 'semantic-ui-react'

const AppHeader = () => {
    const history = useHistory()
    const homeButton = () => {
        history.push('/')
    }
    const order = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <Menu borderless>
                <Menu.Item header as='h1'>Lambda Eats</Menu.Item> 
                <Menu.Menu position='right'>
                    <Menu.Item onClick={homeButton}>Home</Menu.Item>
                    <Menu.Item onClick={order}>
                        Order
                    </Menu.Item>
                    
                </Menu.Menu>
            </Menu>
            <p>You can remove this code and create your own header</p>
        </div>
    )
}

export default AppHeader