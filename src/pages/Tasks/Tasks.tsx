import { Box, Grid, Heading } from "@chakra-ui/react";
import { CreateTask } from "../../components/CreateTask/CreateTask";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TaskItem } from "../../components/TaskItem/TaskItem";

const Tasks = () => {
  return (
    <Grid templateColumns="auto 1fr">
      <Sidebar />
      <Box padding="8">
        <Heading>Lista de Tarefa</Heading>
        <CreateTask />
        <TaskItem />
      </Box>
    </Grid>
  );
};

export { Tasks };
