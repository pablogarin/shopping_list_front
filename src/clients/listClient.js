class ListClient {
  constructor(requestAPI, actions) {
    this.api = requestAPI;
    this.path = 'list';
    this.actions = actions;
  }

  setDispatch(dispatch) {
    this.dispatch = dispatch
  }

  async getAll() {
    const items = await this.api.get(this.path)
    if (!items) return null
    if (typeof this.dispatch === 'function') {
      this.dispatch({
        type: this.actions.GET_ALL,
        payload: items,
      });
    }
    return items
  }

  async get(id) {
    const item = await this.api.get(`${this.path}/${id}`)
    if (!item) return null
    if (typeof this.dispatch === 'function') {
      this.dispatch({
        type: this.actions.INSERT,
        payload: item,
      });
    }
    return item
  }

  async create(data) {
    const item = await this.api.post(this.path, data)
    if (!item) return null
    if (typeof this.dispatch === 'function') {
      this.dispatch({
        type: this.actions.INSERT,
        payload: item,
      });
    }
    return item;
  }

  async update(id, data) {
    const path = `${this.path}/${id}`
    const item = await this.api.put(path, data);
    if (!item) return null
    if (typeof this.dispatch === 'function') {
      this.dispatch({
        type: this.actions.UPDATE,
        payload: item,
      });
    }
    return item;
  }

  async delete(id) {
    const path = `${this.path}/${id}`
    const deleted = await this.api.delete(path)
    if (deleted && typeof this.dispatch === 'function') {
      this.dispatch({
        type: this.actions.DELETE,
        payload: id
      });
    }
  }
}

export default ListClient;
