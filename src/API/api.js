import axios from "axios";
import config from "../config";

export default axios.create({
  BASE_PATH: config.BASE_PATH,
  API_VERSION: config.API_VERSION,
});
