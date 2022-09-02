import { Container, Col, Row, Button } from 'react-bootstrap';
import Link from 'next/link';
import MainBtns from './UI/MainBtns';
import Footlogo from './UI/Footlogo';
import Doxx from './Doxx';
import Linxx from './Linxx';
import styled from 'styled-components';

const Styles = styled.div`
.container-fluid{
    background-color: #2c2c2c;
    text-align: center;
    color: white;
    padding-bottom: 30px;
    }
`


const Footer = () => {
    return (
        <Styles>
            <Container fluid style={{ paddingBottom: '50px' }}>
                <MainBtns />
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <Footlogo />
                        <p>Copyright &copy; 2022 LinearDev</p>
                    </Col>
                    <Col>
                        <Doxx />
                    </Col>
                    <Col>
                    <Linxx />
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}

export default Footer