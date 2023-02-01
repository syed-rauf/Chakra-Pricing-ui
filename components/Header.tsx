import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <Box
      as="section"
      bg="#6B46C1"
      color="#F7FAFC"
      pt="90px"
      pb="198px"
      px="32px"
      textAlign={["left", "left", "center"]}
    >
      <Heading fontWeight={800} fontSize={["3xl", "3xl", "5xl"]}>
        Simple pricing for your business
      </Heading>

      <Text fontWeight={500} fontSize={["lg", "lg", "2xl"]} pt="16px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
};

export default Header;
