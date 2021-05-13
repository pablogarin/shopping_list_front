import axios from 'axios';

class RequestAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  async get(path) {
    try {
      const url = `${this.baseUrl}/${path}`;
      const response = await axios.request({
        url,
        method: 'GET'
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async post(path, data) {
    try {
      const response = await axios.request({
        url: `${this.baseUrl}/${path}`,
        method: 'POST',
        data
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async put(path, data) {
    try {
      const url = `${this.baseUrl}/${path}`;
      const response = await axios.request({
        url,
        method: 'PUT',
        data
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async delete(path) {
    try {
      const response = await axios.request({
        url: `${this.baseUrl}/${path}`,
        method: 'DELETE'
      });
      if (response?.data?.deleted) {
        return true;
      }
    } catch (e) {
      console.log(e)
    }
    return false;
  }
}

export default RequestAPI;
