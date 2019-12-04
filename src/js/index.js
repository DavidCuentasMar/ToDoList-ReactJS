import React, {useState} from 'react';
import ItemList from './ItemsList'
function App() {
  const [auxNewItem, setAuxNewItem] = useState('')
  const [itemList, setItemList] = useState([])

  const onChange = (event) => {
    setAuxNewItem(event.target.value);
  }
  const addItem = (e) =>{
    e.preventDefault();
    if(!itemList.includes(auxNewItem)){
      setItemList([...itemList, auxNewItem]);
    }
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={addItem}>
        <input value={auxNewItem} onChange={onChange} />
        <button type="submit"> Add To List</button>
      </form>
      <ItemList itemList={itemList}/>
    </div>
  );
}

export default App;
