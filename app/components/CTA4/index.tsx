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

const CTA4 = () => {
  return (
    <Box py="100px" pos="relative">
      <Box pos="absolute" transform="translate(70%,-50%)" top="50%" left={0}>
        <Image
          src="/cta-4-gradient.svg"
          alt="cta-4-gradient"
          width={1920}
          height={420}
          layout="responsive"
          objectFit="cover"
        />
      </Box>
      <SimpleGrid
        columns={2}
        mx={{ base: "15px", sm: "40px", md: "70px", lg: "90px", xl: "130px" }}
      >
        <Stack align="flex-start" zIndex={999} justify="center" gap="16px">
          <Heading
            color="brand.white"
            fontSize="50px"
            fontWeight={900}
            lineHeight="65px"
            fontStyle="normal"
          >
            Take your first step into safe, secure crypto investing
          </Heading>
          <Text mb="16px" color="brand.gray" w="90%" bg="16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor
          </Text>
          <Button
            borderRadius="10px"
            color="brand.white"
            w="fit-content"
            bg="brand.gradient"
            p="12px 21px"
            fontSize="16px"
            fontWeight={600}
            lineHeight="16px"
          >
            Get Started
          </Button>
        </Stack>
        <Flex align="center">
          <Box>
            <Image
              src="/cta-4-img.svg"
              alt="cta-4-img"
              width={580}
              height={420}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default CTA4;
