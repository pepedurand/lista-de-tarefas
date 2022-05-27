import { CalendarIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, List, ListItem } from "@chakra-ui/react";

const Lists = () => {
  return (
    <Box padding="4" textColor="gray.700">
      <List spacing={2}>
        <ListItem display="flex">
          <Button
            leftIcon={<CalendarIcon />}
            variant="ghost"
            colorScheme="blue"
            justifyContent="start"
            width="100%"
          >
            Ver Lista
          </Button>
        </ListItem>
      </List>
      <Divider my="4" />
      <Button
        width="100%"
        justifyContent="100%"
        leftIcon={<PlusSquareIcon />}
        variant="ghost"
        colorScheme="blue"
      >
        Adicionar Lista
      </Button>
    </Box>
  );
};

export { Lists };
