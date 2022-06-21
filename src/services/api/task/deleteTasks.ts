import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

interface DeleteTaskParams {
  listId: number;
  taskId: number;
}

export const deleteTask = async (props: DeleteTaskParams) => {
  const response = await axios.delete(
    `${baseUrl}/users/1/tasklists/${props.listId}/tasks/${props.taskId}`
  );
  return response;
};
