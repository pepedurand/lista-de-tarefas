import { Avatar, Grid, Text, useColorModeValue } from "@chakra-ui/react";

const UserInfo = () => {
  const color = useColorModeValue("gray.700", "gray.400");
  return (
    <Grid gap={4} templateColumns="auto 1fr" padding="4">
      <Avatar src="https://lh3.googleusercontent.com/a-/AOh14Gj_kilfDwHZkvDy9OnEPp6M9PmoHWORtCU6XLIc=s576-p-rw-no" />
      <Grid templateRows="auto auto">
        <Text fontSize="md">Pedro Durand</Text>
        <Text color={color} fontSize="sm">
          webpedrod@gmail.com
        </Text>
      </Grid>
    </Grid>
  );
};

export { UserInfo };
