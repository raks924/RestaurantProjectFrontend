import axios from 'axios';
import { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useNavigate } from 'react-router-dom';

function AddCategory() {
    const [validated, setValidated] = useState(false);
    // const menuid = useLocation();
    const navigate = useNavigate();
    const catNameRef = useRef(null);
    const menuIdRef = useRef(null);
    const catDescriptionRef = useRef(null);
    const catImageLinkRef = useRef(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const menuid = menuIdRef.current.value;
            const categoryname = catNameRef.current.value;
            const categorydescription = catDescriptionRef.current.value;
            const categoryimageLink = catImageLinkRef.current.value;
            const categoryisDeleted = false;
            const catData = {
                // menuId : menuid,
                catName : categoryname,
                catDescription : categorydescription,
                catImage : categoryimageLink,
                isDeleted : categoryisDeleted
            };
            axios.post(`https://localhost:7237/api/CategoryTables/menuId=${menuid}`, catData)
                .then(response => {
                    console.log(response);
                    alert('Created successfully');
                    navigate('/home');
                })
                .catch(error => {
                    console.log('Error submitting data in post', error);
                    alert('Failed to create');
                });
        }
        setValidated(true);
    };

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-4">
                    <Form.Group as={Col} md="15" controlId="validationCustom01">
                        <Form.Label>Menu Id</Form.Label>
                        <Form.Control
                            ref={menuIdRef}
                            required 
                            type="text"
                            placeholder="Menu Id"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="15" controlId="validationCustom02">
                        <Form.Label>Category name</Form.Label>
                        <Form.Control
                            ref={catNameRef}
                            required
                            type="text"
                            placeholder="Category name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="15" controlId="validationCustom03">
                        <Form.Label>Category Description</Form.Label>
                        <Form.Control
                            ref={catDescriptionRef}
                            required
                            type="text"
                            placeholder="Category Description"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="15" controlId="validationCustomUsername">
                        <Form.Label>Category Image Link</Form.Label>
                        <Form.Control
                            ref={catImageLinkRef}
                            type="text"
                            placeholder="Category Image Link"
                        />
                        <Form.Control.Feedback type="invalid">
                            Good Link!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Container>
    );
}

export default AddCategory;