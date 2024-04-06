import axios from "axios";


export const api = axios.create({
  baseURL: "https://paingsoe.record4all.com/api",
});
