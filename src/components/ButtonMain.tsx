import { Box } from "@chakra-ui/react";

const ButtonMain = ({ title }: { title: string }) => (
    <Box
      as="button"
      height="6vw"
      width="100%"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      px="8px"
      borderRadius="4px"
      fontSize="3vh"
      fontWeight="semibold"
      bg="transparent"
      borderColor="#ccff00"
      color="#ccff00"
      _hover={{
        transform: "scale(0.93)",
        boxShadow: "0 0 1px 2px #24f7e1, 0 1px 1px #ddb48c",
      }}
      _active={{
        transform: "scale(0.98)",
      }}
      _focus={{
        boxShadow: "0 5px 15px #24f7e1",
      }}
      >
      {title}
    </Box>
);

export default ButtonMain; 

ButtonMain.defaultProps = {
  title: "button",
};

