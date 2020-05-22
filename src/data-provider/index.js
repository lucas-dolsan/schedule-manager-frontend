import endpoints from "../constants/endpoints";

const { create } = require("axios").default;
const remoteServerAddress = "http://localhost:3001";

const axios = create({
  headers: {
    post: {
      Authorization: localStorage.getItem("accessToken"),
    },
    get: {
      Authorization: localStorage.getItem("accessToken"),
    },
  },
});

async function getOne(endpoint, uuid) {
  try {
    const response = await axios.get(
      `${remoteServerAddress}${endpoint}?id=${uuid}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getList(endpoint) {
  try {
    const response = await axios.get(`${remoteServerAddress}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function authenticate(credentials) {
  try {
    const response = await axios.post(`${remoteServerAddress}/${endpoints.AUTHENTICATE}`, credentials)
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function createOne(endpoint, body) {
  try {
    const response = await axios.post(`${remoteServerAddress}/${endpoint}`, body)
    return response
  } catch (error) {
    throw error
  }

}

async function registerUser(credentials) {
  try {
    const response = await axios.post(
      `${remoteServerAddress}/${endpoints.REGISTER_USER}`,
      credentials
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default {
  getOne,
  getList,
  authenticate,
  createOne,
  registerUser,
};
