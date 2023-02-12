// import { useState, useCallback, useMemo } from "react";
// import { useCardActions } from "../Context";
import { useMemo } from "react";

const SecondaryScreen: React.FC = () => {
    // const [text, setText] = useState('');
    // const [text, setText] = useState<ListItem[]>([]);

    // const { addCard } = useCardActions()

    // const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(e.target.value);
    // }, [])

    // const handleCreate = useCallback(() => {
    //     addCard(text);
    //     setText('');
    // }, [text, addCard])

    const divStyle = useMemo(() => {
        return {
            display: "flex",
            position: "absolute" as "absolute",
            top: "20%",
            left: "41%",
            margin: "-100px 0 0 -100px",
            maxWidth: "505px",
            color: "rgb(255, 255, 255)",
            backgroundColor: "rgba(255, 255, 255, 0.4)",

        }
    }, [])

    return (
        <>
            <div
                className="input-group mb-3"
                style={divStyle}
            >
                <h1>Restaurants in the database</h1>
            </div>
        </>
    )
}

export default SecondaryScreen;