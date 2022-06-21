import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

interface getTaskListParams {
  listId: number;
}

export const getTaskList = async (props: getTaskListParams) => {
  const response = await axios.get(
    `${baseUrl}/users/1/tasklists/${props.listId}`
  );
  return response.data;
};
