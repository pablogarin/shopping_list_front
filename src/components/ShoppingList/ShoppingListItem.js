import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemCTA,
  ListItemBody,
  ListItemButtons
} from '../styled/List';
import { Text } from '../styled/Text';
import { Form, Input, Checkbox } from '../styled/Form';
import { MoreButton } from '../styled/Buttons';
import Dialog from '../Dialog';
/*
import {
  formatDate,
  checkAge,
} from '../../utils/datetime'
*/

function ShoppingListItem({ item, finish, remove }) {
  const [showOptions, setShowOptions] = useState(false);
  const [quantity, setQuantity] = useState(item.needed);
  const {
    name,
    needed,
    purchased,
  } = item;

  const done = needed === purchased;
  
  /*
  const isNeeded = (date) => {
    const diff = checkAge(lastPurchase, { months: 1 });
    return diff < 0;
  }
  */

  const markDone = async (e) => {
    if (!e.target.checked) {
      finish(item, 0);
    } else {
      finish(item, needed);
    }
  }

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  }

  const changeQuantity = (e) => {
    const inputValue = e.target.value || 0;
    if (isNaN(inputValue)) {
      return
    }
    setQuantity(parseInt(inputValue, 10));
  }

  const updateItem = () => {
    remove(item, quantity);
  }

  return (
    <>
      {showOptions && (
        <Dialog
          title="Modificar lista"
          toggleVisible={toggleOptions}
          acceptButton={updateItem}
          cancelButton={true}
        >
          <Form>
            <Text size="18px" align="center" display="block">{name}</Text>
            <Input
              onChange={changeQuantity}
              placeholder="Cantidad"
              disabled={needed === purchased}
              value={quantity}
            />
          </Form>
        </Dialog>
      )}
      <ListItem>
        <ListItemCTA>
          <Checkbox onChange={markDone} checked={needed === purchased} />
        </ListItemCTA>
        <ListItemBody>
          <Text size="24px" textWidth="70%" decoration={done && 'line-through'}>{name}</Text>
          <Text size="24px" color="#999" textWidth="30%"> (x{needed})</Text>
        </ListItemBody>
        <ListItemButtons>
          <MoreButton onClick={toggleOptions} />
        </ListItemButtons>
      </ListItem>
    </>
  )
}

ShoppingListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    needed: PropTypes.number.isRequired,
    lastPurchase: PropTypes.string
  })
}

export default ShoppingListItem
