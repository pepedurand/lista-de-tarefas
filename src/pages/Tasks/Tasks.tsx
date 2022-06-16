import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateTask } from "../../components/CreateTask/CreateTask";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TaskItem } from "../../components/TaskItem/TaskItem";
import { TaskListTitle } from "../../components/TaskListTitle/TaskListTitle";
import { getOneTaskList } from "../../services/api/task-list/getOneTaskList";
import { getTasks } from "../../services/api/task/getTasks";
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

  useEffect(() => {
    if (!listId) return;
    const loadTasks = async () => {
      try {
        const loadedTasks = await getTasks({
          listId: Number(listId),
        });
        setTasks(loadedTasks);
      } catch (e) {
        alert(e);
      }
    };
    const loadTaskList = async () => {
      try {
        const selectedTaskList = await getOneTaskList({
          listId: Number(listId),
        });
        setSelectedList(selectedTaskList);
      } catch (e) {
        alert(e);
      }
    };
    loadTasks();
    loadTaskList();
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
        listId: Number(listId),
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
        <TaskListTitle listId={Number(listId)} title={selectedList?.name} />
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
