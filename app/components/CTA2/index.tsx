import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const CTA2 = () => {
  return (
    <Box pos="relative">
      <Box pos="absolute" transform="translate(0%,-55%)" top="50%" left={0}>
        <Image
          src="/cta-2-overlay.svg"
          alt="cta-2-right"
          width={962}
          height={600}
        />
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        mx={{ base: "15px", sm: "40px", md: "70px", lg: "90px", xl: "130px" }}
        py={{ base: "50px", sm: "108px" }}
        spacing={{ base: 12, sm: 2 }}
        // maxH="80vh"
      >
        <Flex align="center" justify="center" zIndex={999}>
          <Image
            src="/cta-2-left.svg"
            alt="cta-2-left"
            width={349}
            height={326}
          />
        </Flex>
        <Stack align="center" zIndex={999} justify="center">
          <Heading
            color="brand.white"
            textAlign="center"
            fontSize={{ base: "30px", sm: "60px" }}
            fontWeight={900}
            lineHeight={{ base: "40px", sm: "70px" }}
            fontStyle="normal"
          >
            A cryto mining platform that invest in you
          </Heading>
          <Text color="brand.gray" w="90%" mb="16px" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor
          </Text>
          <Button
            borderRadius="10px"
            border="1px solid #ffff"
            p="12px 21px"
            fontSize="16px"
            fontWeight={600}
            lineHeight="16px"
            bg="transparent"
            color="brand.white"
            _hover={{
              bg: "brand.gradient",
            }}
          >
            Get Started
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default CTA2;
