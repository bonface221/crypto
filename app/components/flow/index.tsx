import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const flowCards = [
  {
    id: 1,
    icon: "/create.svg",
    title: "Create",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor",
    cta: "Get Started",
  },
  {
    id: 2,
    icon: "/login.svg",
    title: "Login",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor",
    cta: "Find an ATM",
  },
  {
    id: 3,
    icon: "/manage.svg",
    title: "Manage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor",
    cta: "Download the App",
  },
];

const Flow = () => {
  return (
    <Box position="relative" pb="80px">
      <SimpleGrid
        mt="-40px"
        columns={{ base: 1, sm: 2, md: 3 }}
        mx="130px"
        spacing="20px"
      >
        {flowCards.map((card) => (
          <Stack
            key={card.id}
            bg="brand.cardBg"
            gap="16px"
            align="center"
            p="32px 24px"
            borderRadius="25px"
          >
            <Image src={card.icon} alt={card.title} width={60} height={60} />

            <Heading
              fontSize="36px"
              color="brand.white"
              fontWeight={800}
              lineHeight="41px"
            >
              {card.title}
            </Heading>
            <Text color="brand.gray" mb="16px">
              {card.description}
            </Text>
            <Flex align="center" gap="6px">
              <Text color="brand.purple">{card.cta}</Text>
              <Image
                src="/arrow-right.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </Flex>
          </Stack>
        ))}
      </SimpleGrid>{" "}
      <Box position="absolute" left={4} bottom={4}>
        <Image src="flow-stars.svg" alt="stars" width={80} height={80} />
      </Box>
    </Box>
  );
};

export default Flow;
