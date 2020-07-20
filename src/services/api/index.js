import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.beta.mejorconsalud.com/wp-json/mc/",
});

export default instance;
