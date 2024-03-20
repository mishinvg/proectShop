import React from "react";
import { useState, useEffect, createContext, useContext} from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import "./index.scss";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import Item from "./components/Item";

const AppContext= createContext();

export default function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      title: 'ананас',
      img: 'ananas.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros.',
      category: 'фрукты',
      price: '700'
    },
    {
      id: 2,
      title: 'клубника',
      img: 'клубника.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor.',
      category: 'ягоды',
      price: '250'
    },
    {
      id: 3,
      title: 'малина',
      img: 'малина.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor.',
      category: 'ягоды',
      price: '500'
    },
    {
      id: 4,
      title: 'черника',
      img: 'черника.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque.',
      category: 'ягоды',
      price: '800'
    },
    {
      id: 5,
      title: 'мандарин',
      img: 'мандарин.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec.',
      category: 'фрукты',
      price: '280'
    },
    {
      id: 6,
      title: 'апельсин',
      img: 'апельсин.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim.',
      category: 'фрукты',
      price: '260'
    },
    {
      id: 7,
      title: 'груша',
      img: 'груша.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin.',
      category: 'фрукты',
      price: '300'
    },
    {
      id: 8,
      title: 'морковь',
      img: 'морковь.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim.',
      category: 'овощи',
      price: '150'
    },
    {
      id: 9,
      title: 'лук',
      img: 'лук.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor.',
      category: 'овощи',
      price: '70'
    },
    {
      id: 10,
      title: 'капуста',
      img: 'капуста.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat.',
      category: 'овощи',
      price: '80'
    },
  ]);

  const [orders,setOrders]=useState([]);
  const [currentItems,setCurrentItems]=useState([]);
  const [showFullItem, setShowFullItem]=useState(false);
  const [fullItem,setFullItem]=useState({});

  useEffect(()=>{
    setCurrentItems(items);
  },[items]);



  const deleteOrder=(id)=>{
    setOrders(orders.filter((el)=>el.id!==id));
  }

  const addToOrder=(item)=>{
    if(!orders.some((el)=>el.id===item.id)){
     setOrders([...orders,item]);
    }
   // добавление товара без оганичений количества товара 
    //setOrders([...orders,item]);
  }

const chooseCategory = (category)=>{
  if(category==="all"){
    setCurrentItems(items);
  } 
  else{
    setCurrentItems(items.filter((el)=>el.category===category));
  }
}

const onShowItem = (item) =>{
  setFullItem(item);
  setShowFullItem(!showFullItem);
}

  return (
    <AppContext.Provider
      value={
        {
          items,
          setItems,
          orders,
          setOrders,
          currentItems,
          setCurrentItems,
          showFullItem,
          setShowFullItem,
          fullItem,
          setFullItem,
          deleteOrder,
          addToOrder,
          chooseCategory,
          onShowItem,
        }
      }
    > 
      <div className="wrapper">
        <Header/>
        <Categories/>
        <Items/>
        {showFullItem && <ShowFullItem/>}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

