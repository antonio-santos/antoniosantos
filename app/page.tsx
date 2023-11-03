import { HStack, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Profile from "./components/Profile/Profile";

export default function Home() {
  return (
    <VStack>
      <HStack height="100vh">
        <VStack flex={1}>
          <Profile />
        </VStack>
      </HStack>
      <Footer />
    </VStack>
  );
}
