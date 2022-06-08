import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

export const postTaskList = async()=> {
  const response = await axios.post(`${baseUrl}/users/1/tasklists`,
  {
    name: "Minha lista incrível"
  }
  )
  return response;
}