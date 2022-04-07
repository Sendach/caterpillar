import axios from 'axios';
const baseUrl = '/api/users';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const addUser = async (user) => {
  const response = await axios.post(baseUrl, user);
  return response.data;
}

const getUserByEmail = async (email) => {
  const response = await axios.get(`${baseUrl}/email/${email}`, email);
  return response.data;
}

const getUserByUsername = async (username) => {
  const response = await axios.get(`${baseUrl}/username/${username}`, username);
  return response.data;
}

export default { getAll, addUser, getUserByEmail, getUserByUsername }