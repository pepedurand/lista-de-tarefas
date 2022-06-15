import axios from "axios";
import { baseUrl } from "../../../utils/constants/baseUrl";

interface GetTasksParams {
  listId: number;
}
export const getTasks = async (props: GetTasksParams) => {
  const response = await axios.get(
    `${baseUrl}/users/1/tasklists/${props.listId}/tasks`
  );
  return response.data;
};
