import React from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input
} from '../styled/Form';
import { Text } from '../styled/Text';
import { SET_QUANTITY } from '../../reducers/listItemReducer';

function listForm({ item, dispatch }) {
  const { name, quantity } = item;
  const handleQuantity = (e) => {
    const inputValue = e.target.value
    if (isNaN(inputValue)) {
      return;
    }
    dispatch({
      type: SET_QUANTITY,
      payload: parseInt((inputValue || 0), 10)
    });
  }
  return (
    <Form>
      <Text size="24px" align="center" display="block">{name}</Text>
      <Input value={quantity} onChange={handleQuantity} />
    </Form>
  )
}

listForm.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    lastPurchase: PropTypes.string.isRequired
  }),
  dispatch: PropTypes.func.isRequired
}

export default listForm

