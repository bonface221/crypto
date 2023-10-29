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
    <SimpleGrid
      columns={2}
      mx={{ base: "15px", sm: "40px", md: "70px", lg: "90px", xl: "130px" }}
      pos="relative"
      py="108px"
      maxH="80vh"
    >
      <Flex align="center" justify="center">
        <Image
          src="/cta-2-left.svg"
          alt="cta-2-left"
          width={349}
          height={326}
        />
      </Flex>
      <Stack align="center">
        <Heading
          color="brand.white"
          textAlign="center"
          fontSize="50px"
          fontWeight={900}
          lineHeight="65px"
          fontStyle="normal"
        >
          A cryto mining platform that invest in you
        </Heading>
        <Text color="brand.gray" w="90%" bg="16px" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor
        </Text>
        <Button
          borderRadius="10px"
          w="fit-content"
          border="1px solid #ffff"
          p="12px 21px"
          fontSize="16px"
          fontWeight={600}
          lineHeight="16px"
          bg="transparent"
          color="brand.white"
        >
          Sign in
        </Button>
      </Stack>
    </SimpleGrid>
  );
};

export default CTA2;
