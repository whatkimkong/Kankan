import { Box, useColorMode } from "@chakra-ui/react";


const ButtonMain = ({ title }: { title: string }) => {
  const { colorMode } = useColorMode()

  const borderColor = { light: '#ff0000', dark: '#ccff00' }
  const color = { light: '#ff0000', dark: '#ccff00' }
  return ( 
    <Box
      as="button"
      height="6vh"
      width="100%"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      px="8px"
      mb='40px'
      borderRadius="4px"
      fontSize="3vh"
      fontWeight="semibold"
      bg="transparent"
      color={color[colorMode]}
      borderColor={borderColor[colorMode]}
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
  )
};

export default ButtonMain; 

ButtonMain.defaultProps = {
  title: "button",
};

