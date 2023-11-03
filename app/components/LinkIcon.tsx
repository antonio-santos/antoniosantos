import { Icon, Link, LinkProps } from "@chakra-ui/react";

interface Props extends Omit<LinkProps, "size"> {
  href: string;
  label: string;
  icon: React.ReactNode;
  size: string | number;
}

// TODO Maybe use chakra-ui LinkIcon instead?
const LinkIcon: React.FC<Props> = ({ href, label, icon, size, ...props }) => (
  <Link isExternal aria-label={label} href={href} 
  {...props}
  >
    <Icon
      color="gray.400"
      transition="color 0.2s"
      boxSize={size}
      _hover={{ color: "gray.600" }}
      mb={-size/3}
      mr={-size/3}
    >
      {icon}
    </Icon>
  </Link>
);

export default LinkIcon;
