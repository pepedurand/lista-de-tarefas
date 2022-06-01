import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface TaskListTitleProps {
  title: string;
  onSubmit: (title: string) => void;
  isLoading: boolean;
}

const TaskListTitle = ({ onSubmit, title, isLoading }: TaskListTitleProps) => {
  const [value, setValue] = useState(title);

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
      </Flex>
    );
  };
  const handleChange = (newTitle: string) => {
    setValue(newTitle);
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
