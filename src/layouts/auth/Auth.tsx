import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <GridItem backgroundColor="blue.900" height="100vh">
        <Image
          opacity="0.2"
          objectFit="cover"
          width="100%"
          height="100%"
          display="block"
          src="https://images.pexels.com/photos/4050344/pexels-photo-4050344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </GridItem>
      <GridItem padding="8">
        <Box maxWidth="80" margin="auto">
          {children}
        </Box>
      </GridItem>
    </Grid>
  );
};

export { Auth };
