import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

interface UpdateTaskParams {
  listId: number;
  taskId: number;
  task: string;
}

export const updateTask = async (props: UpdateTaskParams) => {
  const response = await axios.put(
    `${baseUrl}/users/1/tasklists/${props.listId}/tasks/${props.taskId}`,
    {
      task: props.task,
    }
  );
  return response;
};
