import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Image from "next/image";

const tableData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "56,290.30",
    trend: "+1.68%",
    graph: "/graph.svg",
    cta: "Trade Now",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "4,284.81",
    trend: "+4.36%",
    graph: "/graph.svg",
    cta: "Trade Now",
  },
  {
    id: 3,
    name: "Cardano",
    symbol: "ADA",
    price: "1.88",
    trend: "+3.43%",
    graph: "/graph.svg",
    cta: "Trade Now",
  },
  {
    id: 4,
    name: "Wax",
    symbol: "WAXP",
    price: "0.97",
    trend: "-2.62%",
    graph: "/graph.svg",
    cta: "Trade Now",
  },
  {
    id: 5,
    name: "Polkadot",
    symbol: "DOT",
    price: "42.22",
    trend: "+7.56%",
    graph: "/graph.svg",
    cta: "Trade Now",
  },
];

const CrytpoTable = () => {
  return (
    <Flex
      py="60px"
      mx={{ base: "15px", sm: "40px", md: "70px", lg: "90px", xl: "130px" }}
    >
      <TableContainer
        zIndex={999}
        bg="brand.cardBg"
        w="100%"
        borderRadius="25px"
        p="20px 35px"
      >
        <Table variant="simple">
          <Tbody color="brand.white">
            {tableData.map((d) => (
              <Tr
                key={d.id}
                py="20px"
                fontSize="20px"
                lineHeight="30px"
                fontWeight="700"
              >
                <Td borderColor="#2B2C3B">{d.name}</Td>
                <Td borderColor="#2B2C3B" color="brand.purple">
                  {d.symbol}
                </Td>
                <Td borderColor="#2B2C3B" isNumeric>
                  ${d.price}
                </Td>
                <Td
                  borderColor="#2B2C3B"
                  color={d.trend[0] === "+" ? "brand.green" : "brand.red"}
                >
                  {d.trend}
                </Td>
                <Td borderColor="#2B2C3B">
                  <Image src="/graph.svg" alt="graph" width={213} height={56} />
                </Td>
                <Td borderColor="#2B2C3B">
                  <Flex>
                    <Text>{d.cta}</Text>
                    <Image
                      src="/arrow-right-white.svg"
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default CrytpoTable;
