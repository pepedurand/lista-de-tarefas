import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher/ColorModeSwitcher";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box position="fixed" left="0" top="0" right="0" textAlign="right">
      <ColorModeSwitcher justifySelf="flex-end" />
    </Box>
    <AppRoutes />
  </ChakraProvider>
);
