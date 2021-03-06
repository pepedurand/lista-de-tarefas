import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

export const getAllTasksLists = async () => {
  const response = await axios.get(`${baseUrl}/users/1/tasklists`);
  return response.data;
};
