import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

interface SelectedTaskList {
  listId: number;
}

export const getOneTaskList = async (props: SelectedTaskList) => {
  const response = await axios.get(
    `${baseUrl}/users/1/tasklists/${props.listId}`
  );
  return response.data;
};
