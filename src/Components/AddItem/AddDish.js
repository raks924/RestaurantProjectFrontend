import axios from 'axios';
import { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function AddDish() {
    const [validated, setValidated] = useState(false);
    // const menuid = useLocation();
    const navigate = useNavigate();
    const dishNameRef = useRef(null);
    const dishDescriptionRef = useRef(null);
    const dishImageLinkRef = useRef(null);
    // const handleSubmit = (event) => {

    //     event.preventDefault();

    //     const form = event.currentTarget;

    //     if (form.checkValidity() === false) {

    //         // event.preventDefault();

    //         event.stopPropagation();

    //     } else {

    //         event.preventDefault();

    //         // const menuID = 0;

    //         const menuname = menuNameRef.current.value;

    //         const menudescription = menuDescriptionRef.current.value;

    //         const menuimageLink = menuImageLinkRef.current.value;

    //         const menuisDeleted = false;




    //         const menuData = {

    //             menuId: menuid.state.menuId,

    //             menuName: menuname,

    //             menuDescription: menudescription,

    //             menuImage: menuimageLink,

    //             isDeleted: menuisDeleted

    //         };




    //         // console.log(menuData);




    //         axios.put(`https://localhost:7237/api/MenuTables/`, menuData)

    //             .then(response => {

    //                 console.log(response);

    //                 alert("Updated Succesfully");

    //                 navigate("/");

    //             })

    //             .catch(error => {

    //                 console.log("error submiting data in put", error);

    //                 alert("Failed to Update");

    //             });

    //     }




    //     setValidated(true);

    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const dishname = dishNameRef.current.value;
            const dishdescription = dishDescriptionRef.current.value;
            const dishimageLink = dishImageLinkRef.current.value;
            const dishisDeleted = false;
            const dishData = {
                // menuName: menuname,
                // menuDescription: menudescription,
                // menuImage: menuimageLink,
                // isDeleted: menuisDeleted

                dishName : dishname,
                dishDescription : dishdescription,
                dishImage : dishimageLink,
                isDeleted : dishisDeleted
            };
            axios.post('https://localhost:7237/api/MenuTables', dishData)
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
                        <Form.Label>Dish name</Form.Label>
                        <Form.Control
                            ref={dishNameRef}
                            required
                            type="text"
                            placeholder="Dish name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="15" controlId="validationCustom02">
                        <Form.Label>Dish Description</Form.Label>
                        <Form.Control
                            ref={dishDescriptionRef}
                            required
                            type="text"
                            placeholder="Dish Description"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="15" controlId="validationCustomUsername">
                        <Form.Label>Dish Image Link</Form.Label>
                        <Form.Control
                            ref={dishImageLinkRef}
                            type="text"
                            placeholder="Dish Image Link"
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

export default AddDish;