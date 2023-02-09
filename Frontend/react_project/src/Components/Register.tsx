import { Form, FloatingLabel, Button } from 'react-bootstrap'


const Register = () => {
    return (
        <>
            <div style={{
                display: "flex",
                position: "absolute",
                top: "50%",
                left: "50%",
                flexDirection: "column",
                margin: "-100px 0 0 -150px"
            }}>

                <h1 style={{textAlign: "center"}}>Register Form</h1>

                <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" required />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="name" placeholder="John Smith" required />
                    </FloatingLabel>
                </Form.Group>


                <Form.Group>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group>
                    <Button 
                    type='submit'
                    style={{
                        width:"100%",
                        marginTop: "10px"
                    }}>Register</Button>
                </Form.Group>
            </div>
        </>
    );
}

export default Register;