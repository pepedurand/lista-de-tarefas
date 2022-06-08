import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

export const deleteTaskList = async (itemId: number) => {
  const response = await axios.delete(`${baseUrl}/users/1/tasklists/${itemId}`);
  console.log(response);
};
