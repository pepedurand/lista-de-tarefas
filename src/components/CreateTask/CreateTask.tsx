import { PlusSquareIcon } from "@chakra-ui/icons";
import { Grid, IconButton, Input, useColorModeValue } from "@chakra-ui/react";

const CreateTask = () => {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Grid
      gap="2"
      templateColumns="auto 1fr auto"
      display="flex"
      flexDirection="row"
      alignItems="center"
      background={bg}
      my="4"
      borderRadius="4"
      padding="2"
    >
      <IconButton
        icon={<PlusSquareIcon />}
        variant="ghost"
        colorScheme="blue"
        aria-label={"Botao de adicionar nova tarefa"}
      />

      <Input />
    </Grid>
  );
};

export { CreateTask };
