import { HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai/index.js";
import { BsTelegram } from "react-icons/bs/index.js";
import { MdEmail } from "react-icons/md/index.js";

import { ProfileProps } from "../page";

interface Props {
  profile: ProfileProps;
}

const SocialLink: React.FC<{
  href: string;
  label: string;
  icon: React.ReactNode;
}> = ({ href, label, icon }) => (
  <Link isExternal aria-label={label} href={href}>
    <Icon
      color="gray.400"
      // display="block"
      transition="color 0.2s"
      boxSize="12"
      _hover={{ color: "gray.600" }}
    >
      {icon}
    </Icon>
  </Link>
);

const SocialLinks: React.FC<Props> = ({
  profile: { name, github, linkedin, twitter, telegram, email },
}) => {
  return (
    <HStack mb={-4}>
      {github && (
        <SocialLink
          href={`https://github.com/${github}`}
          label={`Go to ${name} GitHub page`}
          icon={<AiFillGithub />}
        />
      )}
      {linkedin && (
        <SocialLink
          href={`https://www.linkedin.com/in/${linkedin}`}
          label={`Go to ${name} Linkedin page`}
          icon={<AiFillLinkedin />}
        />
      )}
      {twitter && (
        <SocialLink
          href={`https://twitter.com/${twitter}`}
          label={`Go to ${name} Twitter page`}
          icon={<AiFillTwitterCircle />}
        />
      )}
      {telegram && (
        <SocialLink
          href={`https://t.me/${telegram}`}
          label={`Go to ${name} Telegram page`}
          icon={<BsTelegram />}
        />
      )}
      {email && (
        <SocialLink
          href={`mailto:${email}`}
          label={`Send Email to ${name}`}
          icon={<MdEmail />}
        />
      )}
    </HStack>
  );
};

export default SocialLinks;
