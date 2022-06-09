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
// axios
// .put(
//   `https://628bc44d667aea3a3e35eb23.mockapi.io/users/1/tasklists/${listId}`,
//   {
//     name: title,
//   }
// )
// .then(({ data }) => {
//   setSelectedList(data);
// })
// .catch((e) => {
//   alert(e.message);
// });
