import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { SiBun, SiVercel, SiChakraui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import LinkIcon from "./LinkIcon";

interface Props {}

const Footer: React.FC<Props> = () => (
  <VStack spacing={0} mb={5}>
    {/* Built with */}
    <HStack spacing={0}>
      <Text color="gray" mr={2}>
        Built with
      </Text>
      <LinkIcon
        href={`https://react.dev/`}
        label={`ReactJS`}
        icon={<FaReact />}
        size={8}
      />
      <LinkIcon
        href={`https://nextjs.org/`}
        label={`NextJS`}
        icon={<TbBrandNextjs />}
        size={8}
      />
      <LinkIcon
        href={`https://chakra-ui.com/`}
        label={`Chakra UI`}
        icon={<SiChakraui />}
        size={8}
      />
      <Text color="gray" mr={2}>
        on
      </Text>
      <LinkIcon
        href={`https://bun.sh/`}
        label={`Bun`}
        icon={<SiBun />}
        size={8}
      />
      <Text color="gray" mr={2}>
        and deployed on
      </Text>
      <LinkIcon
        href={`https://vercel.com/`}
        label={`Vercel`}
        icon={<SiVercel />}
        size={8}
      />
    </HStack>

    {/* Fork it */}
    <Link
      isExternal
      aria-label="Fork this to create your own"
      href="https://github.com/antonio-santos/antoniosantos/fork"
      color="gray"
    >
      Fork this to create your own
    </Link>
  </VStack>
);

export default Footer;
