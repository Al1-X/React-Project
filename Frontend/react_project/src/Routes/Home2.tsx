import 'bootstrap/dist/css/bootstrap.min.css';

import CardItem from '../Components/CardItem';
import { useCardActions } from '../Context';
import { useEffect, useState } from 'react';
import { ListItem, ListItemStatus, restaurantResponse } from '../types';
import SecondaryScreen from '../Components/SecondaryScreen';

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
    // const restaurants = useCardData()
    const { editCard } = useCardActions()

    const [restaurants, setRestaurants] = useState<ListItem[]>([]);

    useEffect(() => {
        fetch('https://localhost:44361/api/Restaurant')
            .then((res) => res.json())
            .then((json: restaurantResponse[]) => json.slice(0, 6))
            .then((data) => {
                setRestaurants(
                    data.map((rest) => ({
                        status: ListItemStatus.notVisited,
                        text: rest.name
                    })));
                console.log(restaurants);
            })

    }, [restaurants]);

    return (
        <>
            <SecondaryScreen />
            <div
                style={divStyle}
            >
                {restaurants.map((item, index) =>
                    <CardItem key={index} item={item} onAction={
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