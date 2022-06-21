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
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { TaskData } from "../../pages/Tasks/Tasks";
import { updateTask } from "../../services/api/task/updateTask";

interface TaskItemProps {
  task: TaskData;
  handleDelete: () => void;
}

const TaskItem = ({ task, handleDelete }: TaskItemProps) => {
  const { listId } = useParams();

  const TaskControls = ({ children }: any) => {
    const { getEditButtonProps } = useEditableControls();
    return <Box {...getEditButtonProps()}>{children}</Box>;
  };

  const handleUpdate = async () => {
    try {
      await updateTask({
        listId: Number(listId),
        taskId: task.id,
        task: taskName.current.value,
      });
    } catch (e) {
      alert(e);
    }
  };

  const taskName = useRef<any>();

  return (
    <Grid gap="2" templateColumns="auto 1fr auto" alignItems="center">
      <Checkbox mx="4" />
      <Editable defaultValue={task.task} onSubmit={handleUpdate}>
        <TaskControls>
          <EditablePreview />
          <EditableInput ref={taskName} />
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
