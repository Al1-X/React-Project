import { useState, useCallback, useMemo } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { useCardActions } from "../Context";

const MainScreen: React.FC = () => {
    const [text, setText] = useState('');
    // const [text, setText] = useState<ListItem[]>([]);

    const { addCard } = useCardActions()

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }, [])

    const handleCreate = useCallback(() => {
        addCard(text);
        setText('');
    }, [text, addCard])

    const divStyle = useMemo(() => {
        return {
            display: "flex",
            position: "absolute" as "absolute",
            top: "20%",
            left: "50%",
            flexDirection: "column" as "column",
            margin: "-100px 0 0 -100px",
            maxWidth: "200px",
        }
    }, [])

    return (
        <>
            <div
                className="input-group mb-3"
                style={divStyle}
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