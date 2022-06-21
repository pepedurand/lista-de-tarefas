import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateTask } from "../../components/CreateTask/CreateTask";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TaskItem } from "../../components/TaskItem/TaskItem";
import { TaskListTitle } from "../../components/TaskListTitle/TaskListTitle";
import { getTaskList } from "../../services/api/task-list/getTaskList";
import { deleteTask } from "../../services/api/task/deleteTasks";
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
  const [updatedTasks, setUpdatedTasks] = useState();

  const loadTask = async () => {
    const loadedTasks = await getTasks({
      listId: Number(listId),
    });
    setTasks(loadedTasks);
  };

  useEffect(() => {
    if (!listId) return;
    try {
      loadTask();
    } catch (e) {
      alert(e);
    }
    const loadTaskList = async () => {
      try {
        const selectedTaskList = await getTaskList({
          listId: Number(listId),
        });
        setSelectedList(selectedTaskList);
      } catch (e) {
        alert(e);
      }
    };
    loadTaskList();
  }, [listId]);

  const handleCreateTask = async (newTask: string) => {
    try {
      const response = await postTask({
        listId: Number(listId),
        task: newTask,
      });
      setTasks([...tasks, response.data]);
    } catch (e) {
      alert("erro");
    }
  };

  const handleDelete = async (task: TaskData) => {
    try {
      await deleteTask({
        listId: Number(listId),
        taskId: task.id,
      });
      const filteredTasks = tasks.filter((item) => item.id !== task.id);
      setTasks(filteredTasks);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Grid templateColumns="minmax(auto, 300px) 1fr">
      <Sidebar />
      <Box padding="8">
        <TaskListTitle listId={Number(listId)} title={selectedList?.name} />
        <CreateTask onChange={handleCreateTask} />
        {tasks.length ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={() => handleDelete(task)}
            />
          ))
        ) : (
          <span>Nenhuma tarefa criada</span>
        )}
      </Box>
    </Grid>
  );
};

export { Tasks };
