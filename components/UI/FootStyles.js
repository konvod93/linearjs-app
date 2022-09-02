import styled from "styled-components";

const FootStyles = styled.div`
.footerlist {
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    text-align: left;
}
.footlisthead {
    color: #9999;
    font-weight:bold;
}
a {
    color:white;
    text-decoration: none;
    margin: 5px;
    &:hover {
        color: rgb(255, 123, 0);
    }
}
`

export default FootStyles;