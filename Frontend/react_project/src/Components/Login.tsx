import { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { useLogin } from '../Context/auth.context';


const Login = () => {
    const [password, setPassword] = useState('');
    const { login } = useLogin();

    const onButtonPress = () => {
        if (password === "adminpass") {
            login();
        }
    }

    return (
        <>
            <div style={{
                display: "flex",
                position: "absolute",
                top: "40%",
                left: "50%",
                flexDirection: "column",
                margin: "-100px 0 0 -100px"
            }}>

                <h1 style={{ textAlign: "center" }}>Login Form</h1>

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
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" onChange={
                            (event) => {
                                setPassword(event.target.value);
                            }
                        } />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group>
                    <Button
                        type='submit'
                        style={{
                            width: "100%",
                            marginTop: "10px"
                        }}
                        onClick={onButtonPress}
                        >Login</Button>
                </Form.Group>
            </div>
        </>
    );
}

export default Login;