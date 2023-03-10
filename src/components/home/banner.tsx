import { VStack, Heading, Box, Text, Button, Img, Stack } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Stack direction={{ base: "column-reverse", md: "row" }} justifyContent={"space-between"} alignItems={"center"} gap={5}>
      <VStack alignItems={"start"} maxW={"35rem"}>
        <Heading fontSize={"xl"} fontWeight={"medium"} fontFamily={"Lexend"}>
          <Box fontSize={"3xl"} display={"inline"} letterSpacing={0} lineHeight={0}>
            👋
          </Box>
          Hi, I&apos;m Ahmad Gani
        </Heading>
        <Heading fontSize={"3xl"}>Web Developer</Heading>
        <Text fontWeight={"medium"}>I&apos;m a lifelong learner passionate about new tech and creating digital products</Text>
        <Button as={"a"} href="mailto:ahmadxgani01@gmail.com" size={"md"} fontWeight={"medium"} fontFamily={"Lexend"} variant="outline" colorScheme={"teal"} rounded={"full"}>
          Email Me
        </Button>
      </VStack>
      <Img src={"/images/profile.jpg"} w={"md"} rounded="xl" />
    </Stack>
  );
};

export default Banner;
