import { Box } from "@chakra-ui/react";
import Hero from "./components/hero";
import Flow from "./components/flow";

export default function Home() {
  return (
    <Box bg="brand.black">
      <Hero />
      <Flow />
    </Box>
  );
}
