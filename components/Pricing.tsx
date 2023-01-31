import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Stack,
  HStack,
  StackProps,
} from "@chakra-ui/react";

const SvgIcone = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM6.2 10.0857L5 11.3714L9 16L17 8.28571L15.8 7L9 12.4L6.2 10.0857Z"
        fill="#652CD3"
      />
    </svg>
  );
};

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" alignItems="flex-start" {...rest}>
      <Icon as={SvgIcone} w="22px" h="22px" />
      <Text
        fontWeight={400}
        fontSize="18px"
        textAlign={["left", "left", "center"]}
      >
        {children}
      </Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box mx="6">
      <Box
        as="section"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        borderRadius="12px"
        maxW="990px"
        m="auto"
        overflow="hidden"
        mt="-175px"
        bg="white"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box
            color="#171923"
            bg="#F0EAFB"
            display="flex"
            p="50px"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Text fontWeight={800} fontSize="24px">
              Primium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]}>
              $391
            </Heading>
            <Text fontWeight={500} fontSize="18px">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" mt="18px" w="full">
              Get Started
            </Button>
          </Box>
          <Box p="50px">
            <Text fontWeight={400} fontSize="18px">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px" alignItems="flex-start">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
