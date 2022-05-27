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

const TaskItem = () => {
  const TaskControls = ({ children }: any) => {
    const { getEditButtonProps } = useEditableControls();
    return <Box {...getEditButtonProps()}>{children}</Box>;
  };
  return (
    <Grid gap="2" templateColumns="auto 1fr auto" alignItems="center">
      <Checkbox mx="4" />
      <Editable>
        <TaskControls>
          <EditablePreview />
          <EditableInput />
        </TaskControls>
      </Editable>
      <IconButton aria-label="Search database" icon={<DeleteIcon />} />
    </Grid>
  );
};

export { TaskItem };
