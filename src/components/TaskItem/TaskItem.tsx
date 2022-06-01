import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Grid,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";

interface TaskItemProps {
  task: any;
  onChange: (task: any) => void;
}

const TaskItem = ({ task, onChange }: TaskItemProps) => {
  const TaskControls = ({ children }: any) => {
    const { getEditButtonProps } = useEditableControls();
    return <Box {...getEditButtonProps()}>{children}</Box>;
  };

  const handleDelete = () => {
    onChange(task);
  };

  return (
    <Grid gap="2" templateColumns="auto 1fr auto" alignItems="center">
      <Checkbox mx="4" />
      <Editable value={task.task}>
        <TaskControls>
          <EditablePreview />
          <EditableInput />
        </TaskControls>
      </Editable>
      <IconButton
        onClick={handleDelete}
        aria-label="Search database"
        icon={<DeleteIcon />}
      />
    </Grid>
  );
};

export { TaskItem };
