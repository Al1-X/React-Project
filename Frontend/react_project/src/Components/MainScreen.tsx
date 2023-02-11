import { useState, useCallback, useMemo } from "react";
import { Button, InputGroup } from "react-bootstrap";

export interface mainScreenProps {
    onCreate: (txt: string) => void
}

const MainScreen: React.FC<mainScreenProps> = ({ onCreate }) => {
    const [text, setText] = useState('');
    // const [text, setText] = useState<ListItem[]>([]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }, [])

    const handleCreate = useCallback(() => {
        onCreate(text);
        setText('');
    }, [text, onCreate])

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