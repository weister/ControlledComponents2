import React from 'react';
import ItemList from './ItemList';

const Items = props => {
  return (
    <div>
      <p className="items">Items</p>
      <ol>
        <ItemList items={props.items}/>
	  </ol>
    </div>
  )
}

export default Items