// import Login from './Components/Login';
// import Register from './Components/Register';
import MainScreen from './Components/MainScreen';
import { ListItem, ListItemStatus } from './types';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useState } from 'react';
import CardItem from './Components/CardItem';

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
  const [items, setItems] = useState<ListItem[]>([]);

  const handleOnCreate = useCallback((text: string) => {
    setItems([
      ...items,
      { status: ListItemStatus.notVisited, text }
    ])
  }, [items])

  // console.log(items);

  return (
    // <Login />
    // <Register />
    <>
      <MainScreen onCreate={handleOnCreate} />
      <div
        style={divStyle}
      >
        {
          items.map((item, index) => <CardItem key={index} item={item} onAction={
            () => {
              let newStatus = ListItemStatus.notVisited

              if (item.status === ListItemStatus.visited) {
                newStatus = ListItemStatus.notVisited
              }
              if (item.status === ListItemStatus.notVisited) {
                newStatus = ListItemStatus.visited
              }
              
              const newItems = [...items];
              newItems[index].status = newStatus;
              setItems(newItems);
            }
          } />)
        }
      </div>
    </>
  );
}

export default App;