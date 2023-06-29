import api from "src/http";

const getUsers = (offset, limit) => {
  return api.get(`api/users/list?limit=${limit}&offset=${offset}`);
}

export {
  getUsers
}