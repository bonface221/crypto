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
    <Box py={{ base: "40px", sm: "100px" }} pos="relative">
      <Box
        pos="absolute"
        transform={{ base: "translate(0%,-25%)", sm: "translate(0%,-55%)" }}
        top="50%"
        right={0}
      >
        <Image
          src="/cta-4-gradient.svg"
          alt="cta-4-gradient"
          width={920}
          height={420}
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 12, sm: 2 }}
        mx={{ base: "15px", sm: "40px", md: "70px", lg: "90px", xl: "130px" }}
      >
        <Stack
          align={{ base: "center", sm: "flex-start" }}
          zIndex={999}
          justify="center"
          gap="16px"
        >
          <Heading
            color="brand.white"
            fontSize={{ base: "30px", sm: "50px" }}
            fontWeight={900}
            lineHeight={{ base: "40px", sm: "65px" }}
            fontStyle="normal"
            textAlign={{ base: "center", sm: "left" }}
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
            bg="brand.gradient"
            p="12px 21px"
            fontSize="16px"
            fontWeight={600}
            lineHeight="16px"
            border="1px solid"
            borderColor="transparent"
            _hover={{
              bg: "transparent",
              border: "1px solid #ffff",
            }}
          >
            Get Started
          </Button>
        </Stack>
        <Flex align="center" zIndex={999}>
          <Box>
            <Image
              src="/cta-4-img.png"
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
