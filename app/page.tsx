import { HStack, VStack } from "@chakra-ui/react";
import Profile from "./Profile/Profile";

export default function Home() {
  return (
    <HStack height="100vh">
      <VStack flex={1}>
        <Profile />
      </VStack>
    </HStack>
  );
}
