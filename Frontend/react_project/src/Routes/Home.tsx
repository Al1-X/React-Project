import 'bootstrap/dist/css/bootstrap.min.css';

import MainScreen from '../Components/MainScreen';
import CardItem from '../Components/CardItem';
import { useCardActions, useCardData } from '../Context';

const divStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column" as "column",
    position: "fixed" as "fixed",
    top: "20%",
    margin: "auto",
    gap: "5px",
    left: "50%",
    transform: "translate(-50%, 0)",
}

const Home: React.FC = () => {
    const items = useCardData()
    const { editCard } = useCardActions()

    return (
        <>
            <MainScreen />
            <div
                style={divStyle}
            >
                {
                    items.map((item, index) => <CardItem key={index} item={item} onAction={
                        () => {
                            editCard(index, item.status)
                        }
                    } />)
                }
            </div>
        </>
    );
}

export default Home