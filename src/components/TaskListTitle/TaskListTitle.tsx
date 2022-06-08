import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
  Editable,
  EditablePreview,
  Input,
  EditableInput,
  Box,
  Stack,
  Skeleton,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskList } from "../../services/api/task-list/deleteTaskList";

interface TaskListTitleProps {
  title: string;
  listId: number;
  onSubmit: (title: string) => void;
  isLoading: boolean;
}

const TaskListTitle = ({
  onSubmit,
  title,
  isLoading,
  listId,
}: TaskListTitleProps) => {
  const [value, setValue] = useState(title);

  const navigate = useNavigate();

  useEffect(() => {
    setValue(title);
  }, [title]);

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup size="sm">
        <IconButton
          aria-label="confirmar edicao do titulo"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="cancelar edicao do titulo"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="Editar titulo da lista"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
        <IconButton
          aria-label="deletar lista"
          size="sm"
          icon={<DeleteIcon />}
          onClick={handleDelete}
        />
      </Flex>
    );
  };
  const handleChange = (newTitle: string) => {
    setValue(newTitle);
  };

  const handleDelete = async () => {
    try {
      await deleteTaskList(listId);
      navigate("/");
    } catch (e) {
      alert("erro");
    }
  };

  return isLoading ? (
    <Stack>
      <Skeleton height="40px" />
    </Stack>
  ) : (
    <Editable
      textAlign="left"
      defaultValue="Minha lista de tarefas fantastica!"
      fontSize="2xl"
      isPreviewFocusable={false}
      display="flex"
      alignItems="center"
      flexDir="row"
      value={value}
      onSubmit={onSubmit}
      onChange={handleChange}
    >
      <EditablePreview />
      <Input width="auto" as={EditableInput} />
      <Box marginLeft="4">
        <EditableControls />
      </Box>
    </Editable>
  );
};

export { TaskListTitle };
