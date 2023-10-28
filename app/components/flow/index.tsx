import { Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
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
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}>
      {flowCards.map((card) => (
        <Stack key={card.id} bg="brand.cardBg" gap="16px" align="center">
          <Image src={card.icon} alt={card.title} width={50} height={50} />

          <Heading fontSize="32px" fontWeight={800} lineHeight="41px">
            {card.title}
          </Heading>
          <Text color="brand.gray" mb="16px">
            {card.description}
          </Text>
          <Flex align="center" gap="6px">
            <Text color="brand.purple">{card.cta}</Text>
            <Image src="/arrow-right.svg" alt="arrow" width={24} height={24} />
          </Flex>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default Flow;
