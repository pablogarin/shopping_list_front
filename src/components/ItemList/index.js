import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import itemReducer, { RESET_DATA, SET_DATA } from '../../reducers/listItemReducer';
import Item from './Item';
import ItemForm from './ItemForm';
import ListForm from './ListForm';
import {
  List,
  ListHeader,
  ListHeaderTitle,
  ListBody,
  ListItem
} from '../styled/List';
import Dialog from '../Dialog'
import { Text } from '../styled/Text';
import { Fab } from '../styled/Buttons';

function ItemList({ items, productClient, listClient }) {
  const initialState = {
    item: null
  }

  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [state, dispatch] = useReducer(itemReducer, initialState);
  
  const toggleCreateForm = () => {
    setCreateFormVisible(!createFormVisible);
  }

  const showError = () => {
    setMessage({
      title: 'Error',
      body: <p>Ocurrió un error inesperado.<br/>Por favor intentelo nuevamente.</p>
    });
  }

  const createItem = async () => {
    const { name, quantity } = state.item;
    if (!name || !quantity) {
      return;
    }
    const item = await productClient.create({ ...state.item });
    if (!item) {
      showError();
    } else {
      setMessage({title: 'Item guardado', body: 'El ítem se guardó con éxito'});
      dispatch({
        type: RESET_DATA
      });
    }
  }

  const addToList = async (item) => {
    await dispatch({
      type: SET_DATA,
      payload: item
    });
    toggleAddForm();
  }

  const toggleAddForm = () => {
    setAddFormVisible(!addFormVisible);
  }

  const saveToList = async () => {
    const { id: product_id, quantity: needed } = state.item;
    if (needed > 0) {
      await listClient.create({ product_id, needed });
      dispatch({
        type: RESET_DATA
      });
    }
  }

  return (
    <>
      {message && (<Dialog title={message.title} toggleVisible={() => setMessage(null)}>
        <Text display="block" align="center">{message.body}</Text>
      </Dialog>)}
      {createFormVisible && (<Dialog
        title="Crear Item"
        toggleVisible={toggleCreateForm}
        acceptButton={createItem}
        cancelButton={true}
      >
        <ItemForm dispatch={dispatch} />
      </Dialog>)}
      {addFormVisible && state.item && (<Dialog
        title="Agregar a Lista"
        toggleVisible={toggleAddForm}
        acceptButton={saveToList}
        cancelButton={true}
      >
        <ListForm item={state.item} dispatch={dispatch} />
      </Dialog>)}
      <List>
        <ListHeader>
          <ListHeaderTitle width="53%"><Text display="block">Nombre</Text></ListHeaderTitle>
          <ListHeaderTitle width="12%"><Text display="block" align="center">Cant</Text></ListHeaderTitle>
          <ListHeaderTitle width="35%"><Text display="block" align="center">Comprado</Text></ListHeaderTitle>
        </ListHeader>
        <ListBody>
          {items.map(item => (
            <ListItem
              key={item.id}
              onClick={() => addToList(item)}
              button
            >
              <Item item={item} />
            </ListItem>
          ))}
        </ListBody>
      </List>
      <Fab onClick={toggleCreateForm}>+</Fab>
    </>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
