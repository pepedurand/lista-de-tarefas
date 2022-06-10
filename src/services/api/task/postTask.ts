import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

interface CreateTaskParams {
  listId: number;
  task: string;
}

export const postTask = async (props: CreateTaskParams) => {
  const response = await axios.post(
    `${baseUrl}/users/1/tasklists/${props.listId}/tasks`,
    {
      task: props.task,
    }
  );
  return response;
};
