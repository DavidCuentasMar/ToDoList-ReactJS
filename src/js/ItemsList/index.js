import React from 'react';

function itemList(props){
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {
          props.itemList.map((item,index)=>{
          return(<li key={index}>{item}</li>)
          })
        }
      </ul>
      
    </div>
  );
}

export default React.memo(itemList);
