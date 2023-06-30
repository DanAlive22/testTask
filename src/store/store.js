import { getUsers } from "src/services/user-service";
import { events } from "src/constants";

class Store {
  isAuth = false;
  subscribers = {};

  setAuth(boolean) {
    this.isAuth = boolean;
    this.publish(events[0], this.isAuth);
  }

  subscribe = (event, callback) => {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    this.subscribers[event].push(callback);
  }

  publish = (event, data) => {
    if (!this.subscribers[event]) { 
      return;
    }

    this.subscribers[event].forEach(subscribersCallback => {
      subscribersCallback(data);
    });
  }

  authorization = (email) => {
    try {
      localStorage.setItem("token", email);
      
      this.setAuth(true);
    } catch (error) {
      return "Ошибка! Не удалось авторизоваться";
    }
  }

  checkAuth = () => {
    try {
      if (!localStorage.getItem("token")) {
        this.setAuth(false);

        return;
      }
      
      this.setAuth(true);
    } catch (error) {
      return "Ошибка! Не удалось проверить авторизован ли пользователь";
    }
  }
  
  logout =  () => {
    try {
      localStorage.removeItem("token");
      
      this.setAuth(false);
    } catch (error) {
      return "Ошибка! Не удалось выйти из системы";
    }
  }

  getUserList = async (offset, limit) => {
    try {
      const response = await getUsers(offset, limit);

      return response.data;
    } catch (error) {
      return "Ошибка! Не удалось получить список пользователей";
    }
  }
}

export default Store;