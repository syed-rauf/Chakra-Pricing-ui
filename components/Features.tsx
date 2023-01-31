import React, { ElementType } from "react";
import {
  MonthlySubscription,
  NoSetupFee,
  MoneyBackGuarantee,
} from "Icons/icons";
import { Box, HStack, Icon, Stack, StackProps, Text } from "@chakra-ui/react";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px" alignItems="start">
      <Icon as={icon} boxSize="48px" />
      <Text textAlign="left" fontSize="18px" fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="32px">
      <Stack px="48px" spacing="20px" direction={["column", "column", "row"]}>
        <Feature icon={MoneyBackGuarantee}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={NoSetupFee}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscription}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
};

export default Features;
