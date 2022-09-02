import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
h1{
    text-align: center;
    color: #212121;
    font-weight: bold;
    margin-bottom: 30px;
      
}
    h2{
    text-align: center;
    color: #212121;
    font-size: 24px;    
    }
    .container {
        margin-top: 50px;
        margin-bottom: 50px;
}
`

const Features = () => {
    return (
        <Styles>
            <Container>
                <h1>Why Linear JS?</h1>
                <Row>
                    <Col className="md-4">
                        <h2>Open Source</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequuntur voluptatem, ad libero
                            dolorem iste ratione dolorum consectetur neque
                            molestiae enim.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequuntur voluptatem, ad libero
                            dolorem iste ratione dolorum consectetur neque
                            molestiae enim.</p>
                    </Col>
                    <Col className="md-4">
                        <h2>Approachable</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Officiis expedita reprehenderit aliquam
                            error explicabo saepe laboriosam repudiandae
                            consequatur architecto ratione!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Repudiandae maxime unde debitis
                            necessitatibus eos ut numquam iusto eius aperiam
                            consequuntur?</p>
                    </Col>
                    <Col className="md-4">
                        <h2>Reliable</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Repudiandae maxime unde debitis
                            necessitatibus eos ut numquam iusto eius aperiam
                            consequuntur?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Repudiandae maxime unde debitis
                            necessitatibus eos ut numquam iusto eius aperiam
                            consequuntur?</p>
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}

export default Features;