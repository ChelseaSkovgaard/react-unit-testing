import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({groceries, onClearGroceries}) => {
  return(
    <div>
      <button className="clear-list-btn"
      disabled={groceries === [] ? true : false}
      onClick={onClearGroceries}>
      Clear Groceries</button>
      {groceries.map(groceryItem =>
          <Grocery key={groceryItem.id} name={groceryItem.name}/>
        )}
    </div>
  );
};

export default GroceryList;

GroceryList.defaultProps = {groceries: []}
