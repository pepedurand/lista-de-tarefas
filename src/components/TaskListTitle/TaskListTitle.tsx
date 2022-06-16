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
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskList } from "../../services/api/task-list/deleteTaskList";
import { updateTaskList } from "../../services/api/task-list/updateTaskList";

interface TaskListTitleProps {
  title: string;
  listId: number;
}

const TaskListTitle = ({ title, listId }: TaskListTitleProps) => {
  const navigate = useNavigate();

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

  const listTitle = useRef<any>();

  const handleTitleChange = async () => {
    try {
      await updateTaskList({
        listId: listId,
        title: listTitle.current.value,
      });
      window.location.reload();
    } catch (e) {
      alert(e);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTaskList(listId);
      navigate("/");
    } catch (e) {
      alert("erro");
    }
  };

  return (
    <Editable
      textAlign="left"
      fontSize="2xl"
      isPreviewFocusable={false}
      display="flex"
      alignItems="center"
      flexDir="row"
      defaultValue={title}
      key={title}
      onSubmit={handleTitleChange}
    >
      <EditablePreview />
      <Input width="auto" as={EditableInput} ref={listTitle} />
      <Box marginLeft="4">
        <EditableControls />
      </Box>
    </Editable>
  );
};

export { TaskListTitle };
