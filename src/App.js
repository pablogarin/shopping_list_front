import { useReducer, useEffect, useState } from 'react';
import Header from './components/styled/Header';
import Tabs from './components/Tabs';
import Tab from './components/Tabs/Tab';
import ShoppingList from './components/ShoppingList';
import {
  shoppingItemReducer,
  SET_LIST,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  SET_PRODUCT_LIST,
  DELETE_PRODUCT,
} from './reducers/shoppingItemReducer';
import RequestAPI from './clients/requestAPI';
import ProductClient from './clients/productClient';
import ItemList from './components/ItemList';
import ListClient from './clients/listClient';

// API Client config
const apiUrl = process.env.NODE_ENV === 'development' ?
  'http://localhost:5012' :
  'https://api.pablogarin.dev';
const requestApi = new RequestAPI(apiUrl);
const actions = {
  product: {
    GET_ALL: SET_PRODUCT_LIST,
    INSERT: ADD_PRODUCT,
    UPDATE: UPDATE_PRODUCT,
    DELETE: DELETE_PRODUCT,
  },
  list: {
    GET_ALL: SET_LIST,
    INSERT: ADD_ITEM,
    UPDATE: UPDATE_ITEM,
    DELETE: DELETE_ITEM,
  }
}
const productClient = new ProductClient(requestApi, actions.product);
const listClient = new ListClient(requestApi, actions.list);

function App() {
  const initialState = {
    items: [],
    list: []
  };
  const [selectedTab, setSelectedTab] = useState("items");
  const [state, dispatch] = useReducer(shoppingItemReducer, initialState);

  productClient.setDispatch(dispatch);
  listClient.setDispatch(dispatch);

  useEffect(() => {
    productClient.getAll();
    listClient.getAll();
  }, []);

  return (
    <div id="app">
      <Header>Lista de Compras</Header>
      <Tabs setSelectedTab={setSelectedTab}>
        <Tab key="items" title="Items" active={selectedTab === "items"}>
          <ItemList items={state.items} productClient={productClient} listClient={listClient} />
        </Tab>
        <Tab key="list" title="Lista" active={selectedTab === "list"}>
          <ShoppingList items={state.items} list={state.list} listClient={listClient} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
