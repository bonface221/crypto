import { Box } from "@chakra-ui/react";
import Hero from "./components/hero";
import Flow from "./components/flow";
import CTA from "./components/CTA";
import CTA2 from "./components/CTA2";
import CTA3 from "./components/CTA3";
import CrytpoTable from "./components/crypto-table";
import CTA4 from "./components/CTA4";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

export default function Home() {
  return (
    <Box bg="brand.black">
      <Hero />
      <Flow />
      <CTA />
      <CTA2 />
      <CTA3 />
      <CrytpoTable />
      <CTA4 />
      <Subscribe />
      <Footer />
    </Box>
  );
}
