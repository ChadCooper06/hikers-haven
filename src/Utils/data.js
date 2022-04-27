import axios from "axios";

//let testServerAPI = 

export async function axiosGet() {
  return axios
    .get(testServerAPI)
    .then((response) => response.data);
}