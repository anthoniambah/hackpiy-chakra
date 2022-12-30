import React from "react";
import "./App.css";
import {
  Input,
  Box,
  Flex,
  Text,
  Link,
  Textarea,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function App() {
  const bgcolor = useColorModeValue("#fff", "#00440");
  const color = useColorModeValue("blue", "white");
  const iconColor = useColorModeValue("black", "white");
  const signColor = useColorModeValue("black", "white");

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box pt="10" as="div" className="App" bg={bgcolor}>
      <Box
        as="div"
        pt={{ xs: "3", sm: "5", md: "4", lg: "10" }}
        m="auto"
        bg={bgcolor}
        px={{ xs: "5", sm: "8", md: "10", lg: "10" }}
        w={{ xs: "80%", sm: "80%", md: "70%", lg: "40%" }}
        h={{ xs: "75vh", sm: "85vh", md: "85vh", lg: "82vh" }}
        border="0.1px solid rgb(203, 213, 224)"
        borderRadius="20px"
        boxShadow="lg"
        color="white"
      >
        <Flex justify="space-between" bg={bgcolor}>
          <Text
            as="b"
            fontSize={{ xs: "23px", sm: "30px" }}
            pb={{ xs: "2", sm: "2" }}
            pt={{ xs: "3", sm: "2" }}
            color={color}
            bg={bgcolor}
          >
            coinbase
          </Text>
          <Flex
            onClick={toggleColorMode}
            bg={bgcolor}
            pt={{ xs: "5", sm: "7" }}
          >
            {colorMode === "light" ? (
              <MoonIcon bg={bgcolor} color={iconColor} />
            ) : (
              <SunIcon />
            )}
          </Flex>
        </Flex>
        <br />
        <Text
          as="p"
          pb="3%"
          fontSize={{ xs: "23px", sm: "32px" }}
          bg={bgcolor}
          color={signColor}
        >
          Sign in to Coinbase
        </Text>
        <Text
          color="rgb(121, 145, 139)"
          pb={{ xs: "5", sm: "5" }}
          fontSize={{ xs: "14px", sm: "16px" }}
          bg={bgcolor}
        >
          Not your device? Use a private or incognito window to sign in.
        </Text>
        <Text
          as="b"
          fontSize={{ xs: "20px", sm: "22px" }}
          pb={{ xs: "2", sm: "5" }}
          bg={bgcolor}
          color={signColor}
        >
          Email
        </Text>
        <Input
          placeholder="Your email address"
          resize="none"
          p={{ xs: "5", sm: "7" }}
        />
        <Button
          mt={{ xs: "6" }}
          bg="rgb(71, 126, 246)"
          color="black"
          size={{ xs: "md", sm: "lg" }}
          w="100%"
          borderRadius="25px"
        >
          Continue
        </Button>
        <Text
          textAlign="center"
          pt="6%"
          fontSize={{ xs: "13px", sm: "15px" }}
          color="rgb(35, 94, 238)"
          bg={bgcolor}
        >
          <Link href="#"> Sign in to a business account</Link>
        </Text>
        <Text
          textAlign="center"
          pt="2%"
          fontSize={{ xs: "13px", sm: "15px" }}
          color="rgb(35, 94, 238)"
          bg={bgcolor}
        >
          <Link href="#">Privacy Policy</Link>
        </Text>
      </Box>
    </Box>
  );
}

export default App;



