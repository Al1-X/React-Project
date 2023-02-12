// import Login from './Components/Login';
// import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainScreen from './Components/MainScreen';
import CardItem from './Components/CardItem';
import { useCardActions, useCardData } from './Context';

import './App.css';

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

function App() {    // functional component (there are also class components)
  // const [items, setItems] = useState<ListItem[]>([]);

  const items = useCardData()
  const { editCard } = useCardActions()
  // console.log('###', state)

  return (
    // <Login />
    // <Register />
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

export default App;