import axios from 'axios';

import { useRef, useState } from 'react';

import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';




function UpdateMenu() {

    const [validated, setValidated] = useState(false);

    const menuid = useLocation();

    const navigate = useNavigate();

    const menuNameRef = useRef(null);

    const menuDescriptionRef = useRef(null);

    const menuImageLinkRef = useRef(null);
    




    const handleSubmit = (event) => {

        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {

            // event.preventDefault();

            event.stopPropagation();

        } else {

            event.preventDefault();

            // const menuID = 0;

            const menuname = menuNameRef.current.value;

            const menudescription = menuDescriptionRef.current.value;

            const menuimageLink = menuImageLinkRef.current.value;

            const menuisDeleted = false;




            const menuData = {

                menuId: menuid.state.menuId,

                menuName: menuname,

                menuDescription: menudescription,

                menuImage: menuimageLink,

                isDeleted: menuisDeleted

            };




            // console.log(menuData);




            axios.put(`https://localhost:7237/api/MenuTables/${menuid.state.menuId}`, menuData)

                .then(response => {

                    console.log(response);

                    alert("Updated Succesfully");

                    navigate("/");

                })

                .catch(error => {

                    console.log("error submiting data in put", error);

                    alert("Failed to Update");

                });

        }




        setValidated(true);

    };




    return (

        <Container>

            {/* <div className="d-flex align-items-center justify-content-center vh-100">

    <div className="form-container position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center"> */}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Row className="mb-4">

                    <Form.Group as={Col} md="15" controlId="validationCustom01">

                        <Form.Label>Menu name</Form.Label>

                        <Form.Control

                            ref={menuNameRef}

                            required

                            type="text"

                            placeholder="Menu name"

                        // defaultValue="Mark"

                        />

                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    </Form.Group>

                </Row>




                <Row className="mb-3">




                    <Form.Group as={Col} md="15" controlId="validationCustom02">

                        <Form.Label>Menu Description</Form.Label>

                        <Form.Control

                            ref={menuDescriptionRef}

                            required

                            type="text"

                            placeholder="Menu Description"

                        // defaultValue="Otto"

                        />

                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    </Form.Group>

                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} md="15" controlId="validationCustomUsername">

                        <Form.Label>Menu Image Link</Form.Label>

                        {/* <InputGroup hasValidation>

            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}

                        <Form.Control

                            ref={menuImageLinkRef}

                            type="text"

                            placeholder="Menu Image Link"

                        //   aria-describedby="inputGroupPrepend"

                        //   required

                        />

                        <Form.Control.Feedback type="invalid">

                            Good Link!

                        </Form.Control.Feedback>

                        {/* </InputGroup> */}

                    </Form.Group>

                </Row>

                <Button type="submit">Submit form</Button>

            </Form>

            {/* </div>

    </div> */}

        </Container>

    );

}





export default UpdateMenu;