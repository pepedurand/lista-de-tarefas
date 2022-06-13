import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateTask } from "../../components/CreateTask/CreateTask";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TaskItem } from "../../components/TaskItem/TaskItem";
import { TaskListTitle } from "../../components/TaskListTitle/TaskListTitle";
import { postTask } from "../../services/api/task/postTask";

export interface TaskData {
  id: number;
  task: string;
  createdAt: Date;
  done: boolean;
}

const Tasks = () => {
  const { listId } = useParams();

  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [selectedList, setSelectedList] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!listId) return;
    axios
      .get(
        `https://628bc44d667aea3a3e35eb23.mockapi.io/users/1/tasklists/${listId}`
      )
      .then((response) => {
        setSelectedList(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        alert(e.message);
      });
  }, [listId]);

  useEffect(() => {
    if (!listId) return;
    axios
      .get(
        `https://628bc44d667aea3a3e35eb23.mockapi.io/users/1/tasklists/${listId}/tasks`
      )
      .then((response) => {
        setTasks(response.data);
      });
  }, [listId]);

  const handleDelete = (deletedTask: any) => {
    // axios
    //   .delete(
    //     `https://628bc44d667aea3a3e35eb23.mockapi.io/users/1/tasklists/${deletedTask.listId}/tasks/${deletedTask.id}`
    //   )
    //   .then(({ data }) => {
    //     const updatedTasks = tasks.filter((data) => data.id !== deletedTask.id);
    //     setTasks([...updatedTasks]);
    //   })
    //   .catch((e) => {
    //     alert(e.message);
    //   });
  };

  const handleCreateTaskChange = async (newTask: string) => {
    try {
      const response = await postTask({
        listId: selectedList.id,
        task: newTask,
      });
      setTasks([response.data, ...tasks]);
    } catch (e) {
      alert("erro");
    }
  };

  return (
    <Grid templateColumns="minmax(auto, 300px) 1fr">
      <Sidebar />
      <Box padding="8">
        <TaskListTitle
          listId={selectedList?.id}
          title={selectedList?.name}
          isLoading={isLoading}
        />
        <CreateTask onChange={handleCreateTaskChange} />
        {tasks.length ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <span>Nenhuma tarefa criada</span>
        )}
      </Box>
    </Grid>
  );
};

export { Tasks };
