import { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";

const MainScreen = () => {
    const [text, setText] = useState('');

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleCreate = () => {
        setText('');
    }

    return (
        <>
            <div
                className="input-group mb-3"
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "20%",
                    left: "50%",
                    flexDirection: "column",
                    margin: "-100px 0 0 -100px",
                    maxWidth: "200px"
                }}
            >
                <InputGroup>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Restaurant name" aria-label="ListInput"
                        value={text}
                        onChange={handleChange}
                    />
                </InputGroup>

                <Button
                    type="submit"
                    onClick={handleCreate}
                    style={{
                        marginTop: "10px"
                    }}
                >Show</Button>
            </div>
        </>
    )
}

export default MainScreen;