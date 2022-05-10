import axios from "axios";

export async function axiosGet() {
  return axios
    .get(testServerAPI)
    .then((response) => response.data);
}