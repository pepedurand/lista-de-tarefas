import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

interface UpdateTaskListParams {
  listId: number;
  title: string;
}
export const updateTaskList = async (props: UpdateTaskListParams) => {
  const response = await axios.put(
    `${baseUrl}/users/1/tasklists/${props.listId}`,
    {
      name: props.title,
    }
  );
  return response;
};
