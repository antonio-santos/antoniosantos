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
import * as json_profile from "./profile.json";

export interface ProfileProps {
  avatar: string;
  name: string;
  professionalDescription?: string;
  personalDescription?: string;
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

const profile: ProfileProps = json_profile;

interface Props {}

const Profile: React.FC<Props> = () => {
  return (
    <Card bgColor="gray.800" borderRadius="2xl" maxWidth={500} m={10}>
      <CardHeader>
        <HStack spacing={5} alignItems="flex-start">
          {profile.avatar && (
            <Avatar size="xl" name={profile.name} src={profile.avatar} />
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
        <VStack spacing={5}>
          <Text color="white" fontSize="md">
            {profile.professionalDescription}
          </Text>
          <Text color="white" fontSize="md">
            {profile.personalDescription}
          </Text>
        </VStack>
      </CardBody>
      <CardFooter borderTopWidth="1px" borderTopColor="gray.700">
        <SocialLinks profile={profile} />
      </CardFooter>
    </Card>
  );
};

export default Profile;
