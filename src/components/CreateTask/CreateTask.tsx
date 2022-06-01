import { PlusSquareIcon } from "@chakra-ui/icons";
import { Grid, IconButton, Input, useColorModeValue } from "@chakra-ui/react";

interface CreateTaskProps {
  onChange: (task: string) => void;
}

const CreateTask = ({ onChange }: CreateTaskProps) => {
  const bg = useColorModeValue("gray.50", "gray.900");

  const handleSubmitTask = (event: any) => {
    event.preventDefault();
    const newTask = event.target.newTask.value;
    if (newTask) {
      onChange(newTask);
      event.target.newTask.value = "";
    } else {
      alert("Digite o nome da tarefa.");
    }
  };

  return (
    <Grid
      as="form"
      gap="2"
      templateColumns="auto 1fr auto"
      display="flex"
      flexDirection="row"
      alignItems="center"
      background={bg}
      my="4"
      borderRadius="4"
      padding="2"
      onSubmit={handleSubmitTask}
    >
      <IconButton
        type="submit"
        icon={<PlusSquareIcon />}
        variant="ghost"
        colorScheme="blue"
        aria-label={"Botao de adicionar nova tarefa"}
      />

      <Input name="newTask" />
    </Grid>
  );
};

export { CreateTask };
