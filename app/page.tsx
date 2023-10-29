import { Box } from "@chakra-ui/react";
import Hero from "./components/hero";
import Flow from "./components/flow";
import CTA from "./components/CTA";
import CTA2 from "./components/CTA2";

export default function Home() {
  return (
    <Box bg="brand.black">
      <Hero />
      <Flow />
      <CTA />
      {/* <CTA2 /> */}
    </Box>
  );
}
