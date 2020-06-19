import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import splash from '../Assets/Pizza.jpg'

const Home = () => {

    return (
        <Container>
            <Image fluid src={splash} />
        </Container>
    )
}

export default Home