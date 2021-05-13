import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../styled/Text';
import { formatDate } from '../../utils/datetime';

function Item({ item }) {
  const { name, quantity, lastPurchase } = item;
  return (
    <>
      <Text
        textWidth="53%"
        size="24px"
        align="left"
      >
        {name}
      </Text>
      <Text
        textWidth="12%"
        size="14px"
        align="center"
      >
        {quantity}</Text>
      <Text
        textWidth="35%"
        size="14px"
        align="center"
      >
        {formatDate(lastPurchase)}
      </Text>
    </>
  )
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;

