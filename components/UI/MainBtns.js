import { Button } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';

const Styles = styled.div`
.btn-primary {
    background-color:  rgb(255, 123, 0);
    border-color: rgb(194, 82, 2);
    margin-top: 50px;
    &:hover {
        background-color: orange;
    border-color: rgb(255, 123, 0);
    }
}
.btn-primary a {
    color: white;
    text-decoration: none;
}

.btn-outline {    
    border-color:  rgb(255, 123, 0);
    margin-top: 50px;
    &:hover {
        background-color: rgb(80, 42, 42);
    }
}
.btn-outline a {
    color:  rgb(255, 123, 0);
    text-decoration: none;
}
`

const MainBtns = () => {
    return (
        <Styles>
            <Button variant="primary" className="btn-lg"><Link href="/"><a>Get Started</a></Link></Button>{' '}
            <Button variant="outline" className="btn-lg"><Link href="/"><a>Learn More</a></Link></Button>{' '}
        </Styles>
    )
}

export default MainBtns;