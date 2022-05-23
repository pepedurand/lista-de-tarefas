import { Box, ChakraProvider, Grid, theme } from "@chakra-ui/react";
import * as React from "react";
import { ColorModeSwitcher } from "./components/color-mode-switcher/ColorModeSwitcher";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <AppRoutes />
      </Grid>
    </Box>
  </ChakraProvider>
);