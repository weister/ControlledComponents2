import React from 'react';

const ItemList = props => {
  return (
    <div>
	  {props.items.map((item, index) => (<li key={index}>{item}</li>))}
    </div>
  )
}

export default ItemList