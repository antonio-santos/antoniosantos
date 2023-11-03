import { HStack } from "@chakra-ui/react";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai/index.js";
import { BsTelegram } from "react-icons/bs/index.js";
import { MdEmail } from "react-icons/md/index.js";
import LinkIcon from "../LinkIcon";
import { ProfileProps } from "./Profile";

interface Props {
  profile: ProfileProps;
}

const SocialLink: React.FC<{
  href: string;
  label: string;
  icon: React.ReactNode;
}> = ({ href, label, icon }) => (
  <LinkIcon href={href} label={label} icon={icon} size={12} />
);

const SocialLinks: React.FC<Props> = ({
  profile: { name, github, linkedin, twitter, telegram, email },
}) => {
  return (
    <HStack spacing={4}>
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
