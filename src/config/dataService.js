import axios from "axios";
import { BASE_URL } from "./url.json";

const authHeader = () =>
  typeof window != "undefined" && localStorage.getItem("JADIDLAR_TOKEN")
    ? {
        Authorization:
          "Bearer " + typeof window != "undefined" &&
          localStorage.getItem("JADIDLAR_TOKEN"),
        // "Accept-Language": localStorage.getItem("JADID_LAN") || "uz",
      }
    : { "Accept-Language": "uz" };

const client = axios.create({
  baseURL: "http://161.35.219.128:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

class DataService {
  static get(path, params = {}, optionalHeader = {}) {
    return client({
      method: "GET",
      url: path,
      params: { ...params },
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static post(path = "", data = {}, optionalHeader = {}) {
    return client({
      method: "POST",
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static patch(path = "", data = {}) {
    return client({
      method: "PATCH",
      url: path,
      data: data,
      headers: { ...authHeader() },
    });
  }

  static delete(path = "", data = {}) {
    return client({
      method: "DELETE",
      url: path,
      data: data,
      headers: { ...authHeader() },
    });
  }

  static put(path = "", data = {}, optionalHeader = {}) {
    return client({
      method: "PUT",
      url: path,
      data: data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let message;
    switch (error.response?.status) {
      case 500:
        message = { errorCode: 500, message: "Внутренняя ошибка сервера!" };
        break;
      case 401:
        {
          // localStorage.removeItem("JADIDLAR_TOKEN");
          // window.location.reload();
        }
        message = error.response?.data;
        break;
      case 400:
        message = error.response?.data;
        break;
      default:
        message = error.response?.data;
    }
    return Promise.reject(message);
  }
);
export { DataService };
