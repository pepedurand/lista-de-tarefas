import { CalendarIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, List, ListItem, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ListItemData {
  id: number;
  name: string;
  createdAt: Date;
}

const Lists = () => {
  let navigate = useNavigate();

  const [list, setList] = useState<ListItemData[]>([]);

  useEffect(() => {
    axios
      .get("https://628bc44d667aea3a3e35eb23.mockapi.io/users/1/tasklists")
      .then((response) => {
        setList(response.data);
      });
  }, []);

  const handleNewTaskList = () => {
    axios
      .post("https://628bc44d667aea3a3e35eb23.mockapi.io/users/1/tasklists", {
        name: "Minha lista incrivel!",
      })
      .then((response) => {
        setList([...list, response.data]);
        navigate(`/${response.data.id}`);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <Box padding="4" textColor="gray.700">
      <List spacing={2}>
        {list.length ? (
          list.map((item) => (
            <ListItem key={item.id} display="flex" width="100%">
              <Button
                as={Link}
                to={`/${item.id}`}
                leftIcon={<CalendarIcon />}
                variant="ghost"
                colorScheme="blue"
                justifyContent="start"
                width="100%"
              >
                <Text noOfLines={1}>{item.name}</Text>
              </Button>
            </ListItem>
          ))
        ) : (
          <ListItem>Nenhuma lista criada</ListItem>
        )}
      </List>
      <Divider my="4" />
      <Button
        width="100%"
        justifyContent="100%"
        leftIcon={<PlusSquareIcon />}
        variant="ghost"
        colorScheme="blue"
        onClick={handleNewTaskList}
      >
        Adicionar Lista
      </Button>
    </Box>
  );
};

export { Lists };
