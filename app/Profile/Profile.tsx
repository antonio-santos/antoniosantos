import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";

export interface ProfileProps {
  name: string;
  description?: string;
  currentJob?: {
    description: string;
    client: string;
  };
  github?: string;
  linkedin?: string;
  twitter?: string;
  telegram?: string;
  email?: string;
}

const profile: ProfileProps = {
  name: "António Santos",
  description:
    "I'm a Senior Frontend Engineer with more than 10 years of experience working with web technologies. I'm passionate about building high-quality software and I'm always looking for new challenges.",
  currentJob: {
    description: "Senior Frontend Engineer",
    client: "AbstractSDK",
  },
  github: "antonio-santos",
  linkedin: "antoniosantos87",
  email: "antonio.santos@blueforest.dev",
  telegram: "antonio_santos87",
};

interface Props {}

const Profile: React.FC<Props> = () => {
  return (
    <Card bgColor="gray.800" borderRadius="2xl" maxWidth={500} m={10}>
      <CardHeader>
        <HStack spacing={5}>
          {profile.github && (
            <Avatar
              size="xl"
              name={profile.name}
              src={`https://github.com/${profile.github}.png`}
            />
          )}
          <VStack alignItems="flex-start">
            <Heading color="white" fontSize="xl">
              {profile.name}
            </Heading>
            <Text color="white" fontSize="md">
              {profile.currentJob?.description}
            </Text>
            <Text color="white" fontSize="md">
              @{profile.currentJob?.client}
            </Text>
          </VStack>
        </HStack>
      </CardHeader>
      <CardBody borderTopWidth="1px" borderTopColor="gray.700">
        <Text color="white" fontSize="md">
          {profile.description}
        </Text>
      </CardBody>
      <CardFooter borderTopWidth="1px" borderTopColor="gray.700">
        <SocialLinks profile={profile} />
      </CardFooter>
    </Card>
  );
};

export default Profile;
