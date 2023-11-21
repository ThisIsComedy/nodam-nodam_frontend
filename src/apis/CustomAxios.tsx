import axios, {AxiosInstance} from "axios";
import envConfig from "../config";

const instance: AxiosInstance = axios.create({
    baseURL: envConfig.apiUrl,
});

export default instance;