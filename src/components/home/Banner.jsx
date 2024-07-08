import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import mixpanel from "mixpanel-browser";
import React from "react";
import hero from "../../assets/images/hero/hero-bg.png";
import IterateWrapper from "../../IterateUtil";
const IterateFlex = IterateWrapper(Flex, {
  "data-iterate": "eyJldmVudHMiOlt7Im5hbWUiOiJzaG9wX3NhbGVfYnV0dG9uX2NsaWNrZWQiLCJhdHRyaWJ1dGVzIjp7InByb2R1Y3QiOiJNZW5zd2VhciAyMDIzIn19XSwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9ob21lL0Jhbm5lci5qc3giLCJpZCI6ImRiNmJiMzNmLTMxYjEtNDY3Yy05OTM5LTVmYzMxZTk2ZDdlOCJ9"
});
export default function Banner() {
  return <Box width="full" height={{
    base: "70vh",
    md: "60vh",
    lg: "80vh"
  }} px="40px" pt="40px" backgroundImage={hero} backgroundSize="cover" backgroundPosition="center">
      <Container maxW="1140px" h="full">
        <IterateFlex justify="space-between" direction={{
        base: "column",
        md: "row",
        lg: "row"
      }} gap={{
        base: "40px",
        md: "0",
        lg: "0"
      }} w="full" h="full">
          <Stack h="full" justify="center">
            <Text fontSize="18px" lineHeight="27px" fontWeight="700" color="var(--darkBgColor)" textTransform="uppercase" fontFamily="Lato">
              New collection
            </Text>
            <Text fontSize={{
            base: "32px",
            md: "62px",
            xl: "62px"
          }} lineHeight={{
            base: "44px",
            md: "83px",
            xl: "83px"
          }} fontWeight="900" color="var(--darkBgColor)" fontFamily="Lato">
              Menswear 2023
            </Text>
            <Text my={{
            base: "0",
            md: "20px",
            xl: "20px"
          }} fontSize="20px" fontWeight="600">
              Live for influential and innovative fashion!
            </Text>
            <IterateFlex gap="20px" mt="40px">
              <IterateFlex justify="center" align="center" border="1px solid var(--primary)" borderRadius="4px" maxW="200px" color="var(--primary)" fontSize="18px" fontWeight="500" px={{
              base: "20px",
              md: "40px",
              xl: "40px"
            }} py="10px" w="full" _hover={{
              bg: "var(--primary)",
              color: "var(--light)",
              transition: "0.8s",
              cursor: "pointer"
            }}>
                Shop now
              </IterateFlex>
              <IterateFlex justify="center" align="center" border="1px solid var(--primary)" borderRadius="4px" maxW="200px" fontSize="18px" fontWeight="500" bg="var(--primary)" color="var(--light)" px="40px" py="10px" display={{
              base: "none",
              md: "flex",
              xl: "flex"
            }} _hover={{
              border: "1px solid var(--primary)",
              color: "var(--primary)",
              transition: "0.8s",
              background: "transparent",
              cursor: "pointer"
            }} onClick={() => {
              mixpanel.track("shop_sale_button_clicked", {
                product: "Menswear 2023"
              });
            }}>
                Shop sale
              </IterateFlex>
            </IterateFlex>
          </Stack>
          <Box maxW="100%"></Box>
        </IterateFlex>
      </Container>
    </Box>;
}