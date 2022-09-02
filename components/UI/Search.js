import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.btn {
    border-color: rgb(255, 123, 0); 
    color: rgb(255, 123, 0);
    &:hover {
        background-color: rgb(255, 123, 0);
        color: white;
    }
}
`

const Search = () => {
    return (
        <Styles>
            <Form>
                <Form.Group className="d-flex" role="search">
                    <Form.Control className="form-control me-2" type="search"
                        placeholder="Search" aria-label="Search" />
                    <Button
                        variant="outline" type="submit">Search</Button>
                </Form.Group>
            </Form>
        </Styles>
    )
}

export default Search;