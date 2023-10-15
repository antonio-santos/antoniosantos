import { Avatar, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";

export interface ProfileProps {
  name: string;
  description?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  telegram?: string;
  email?: string;
}

const profile: ProfileProps = {
  name: "António Santos",
  description: "Senior Frontend Engineer",
  github: "antonio-santos",
  linkedin: "antoniosantos87",
  email: "antonio.santos@blueforest.dev",
  telegram: "antonio_santos87",
};

export default function Home() {
  return (
    <HStack height="100vh">
      <VStack flex={1}>
        <VStack spacing={5}>
          {profile.github && (
            <Avatar
              size="xl"
              name={profile.name}
              src={`https://github.com/${profile.github}.png`}
            />
          )}
          <Heading color="white" fontSize="xl">
            {profile.name}
          </Heading>
          <Text color="white" fontSize="md" textAlign="center">
            {profile.description}
          </Text>

          <SocialLinks profile={profile} />
        </VStack>
      </VStack>
    </HStack>
  );
}
