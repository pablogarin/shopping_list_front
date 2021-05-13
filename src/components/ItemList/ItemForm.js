import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SET_NAME, SET_QUANTITY } from '../../reducers/listItemReducer';
import {
  Form,
  Input
} from '../styled/Form'
import { Text } from '../styled/Text'

function ItemForm({ dispatch }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const nameHandler = (e) => {
    const name = e.target.value;
    setName(name);
    dispatch({
      type: SET_NAME,
      payload: name
    });
  }
  
  const quantityHandler = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    const q = parseInt((e.target.value || 0), 10)
    setQuantity(q)
    dispatch({
      type: SET_QUANTITY,
      payload: q
    });
  }

  return (
    <>
      <Form>
        <Text align="center">Nuevo Item</Text>
        <Input type="text" onChange={nameHandler} value={name} placeholder="Nombre" />
        <Input type="text" onChange={quantityHandler} value={quantity} placeholder="Cantidad" />
      </Form>
    </>
  )
}

ItemForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default ItemForm;
