// import { $api } from "~/utils/axios";

/**
 * Запрос для получения всех тудушек
 */
const getAllTodos = async () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      // .then(json => allTodos.value = json)
  
};

export { getAllTodos };