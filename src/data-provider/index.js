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
    console.log(`${remoteServerAddress}${endpoint}/${uuid}`)
    const response = await axios.get(`${remoteServerAddress}/${endpoint}/${uuid}`)
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getList(endpoint, args) {
  try {
    const response = await axios.get(`${remoteServerAddress}/${endpoint}${args ? args : ""}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function login(credentials) {
  try {
    const response = await axios.post(`${remoteServerAddress}/${endpoints.LOGIN}`, credentials)
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
      `${remoteServerAddress}/${endpoints.REGISTER}`,
      credentials
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function setProgressoAtividade(body) {
  try {
    const response = await axios.post(
      `${remoteServerAddress}/${endpoints.ATIVIDADES}/set-progresso`,
      body
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function startCronograma(endpoint) {
  try {
    const response = await axios.get(`${remoteServerAddress}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getFilteredCronogramas() {
  try {
    const response = await axios.get(`${remoteServerAddress}/${endpoints.CRONOGRAMAS}/filtered`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default {
  getOne,
  getList,
  login,
  createOne,
  registerUser,
  getFilteredCronogramas,
  startCronograma,
  setProgressoAtividade
};
