import { Divider, Grid, useColorModeValue } from "@chakra-ui/react";
import { UserInfo } from "../UserInfo/UserInfo";
import { Lists } from "../Lists/Lists";

const Sidebar = () => {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Grid
      templateRows="auto auto 1fr "
      background={bg}
      height="100vh"
      boxShadow="xl"
      px="4"
      overflow="hidden"
    >
      <UserInfo />
      <Divider />
      <Lists />
    </Grid>
  );
};

export { Sidebar };
