import React from 'react';
import PropTypes from 'prop-types';
import { List, ListBody } from '../styled/List';
import ShoppingListItem from './ShoppingListItem';

function ShoppingList({ items, list, listClient }) {
  const shoppingList = list.map(item => {
    const prod = items.find(prod => prod.id === item.product_id)
    const { name, lastPurchase } = prod
    return {
      ...item,
      name,
      lastPurchase
    }
  })
  const removeItem = async (item, quantity) => {
    if (quantity === 0) {
      await listClient.delete(item.id);
    } else {
      await listClient.update(item.id, {...item, needed: quantity})
    }
  }

  const buyItem = async (item, purchased) => {
    await listClient.update(item.id, {...item, purchased})
  }

  return (
    <>
      <List>
        <ListBody>
          {shoppingList.map(item => (<ShoppingListItem
            key={item.id}
            item={item}
            finish={buyItem}
            remove={removeItem} />))}
        </ListBody>
      </List>
    </>
  )
}

ShoppingList.propTypes = {
  list: PropTypes.array.isRequired,
  listClient: PropTypes.object.isRequired,
}

export default ShoppingList
