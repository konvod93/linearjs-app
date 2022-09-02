import Image from 'next/image';
import Link from 'next/link'
import { Container, Col, Row, Button } from 'react-bootstrap';
import MainBtns from './UI/MainBtns';
import styled from 'styled-components';


const Styles = styled.div`
.container-fluid {
    background-color:rgb(17, 1, 29);
    color: white; 
    font-size: 24px; 
    text-align: center;
}
.col {
    padding: 100px;
}
h1 {
    color:  rgb(255, 123, 0);
    font-weight: bold;
    font-size: 60px;
    text-align: center;
    }

`

const FirstSection = () => {
    return (
        <Styles>
            <Container fluid>
                <Row>
                    <Col className="md-6">
                        <h1>Linear JS</h1>
                        <p>Framework on the native JavaScript</p>
                        <MainBtns />
                    </Col>
                    <Col className="md-6" style={{ padding: '0px' }}>
                        <Image src='/example.png' alt='image of site' layout='fixed' width={542} height={472} />
                    </Col>
                </Row>
            </Container>
        </Styles>

    )
}

export default FirstSection;