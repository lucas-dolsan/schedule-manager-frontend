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
    const response = await axios.get(`${remoteServerAddress}${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function login(credentials) {
  try {
    const response = await axios.post(
      `${remoteServerAddress}/authenticate`,
      credentials
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function cadastrar(credentials) {
  try {
    const response = await axios.post(
      `${remoteServerAddress}/register`,
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
  login,
  cadastrar,
};
