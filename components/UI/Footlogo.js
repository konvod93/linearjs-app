import Link from "next/link";
import styled from "styled-components";

const Styles = styled.div`
a {
    font-family: 'Tahu!';
    font-size: 32px;
    color: white;
    text-decoration: none;
    &:hover {
        color: rgb(255, 123, 0)
    }    
}
`

const Footlogo = () => {
    return (
        <Styles>
            <p><Link href="/"><a>Linear JS</a></Link></p>
        </Styles>

    )
}

export default Footlogo;