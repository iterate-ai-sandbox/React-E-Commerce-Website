import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import mixpanel from "mixpanel-browser";
import React from "react";
import checked from "../assets/images/icons/checked.png";
import img from "../assets/images/icons/subscribe.png";
import IterateWrapper from "../IterateUtil";
const IterateFlex = IterateWrapper(Flex, {
  "data-iterate": "eyJldmVudHMiOlt7Im5hbWUiOiJzdWJzY3JpYmVfY2xpY2tlZCIsImF0dHJpYnV0ZXMiOnsiTG9jYXRpb24iOiJTdWJzY3JpYmUiLCJkYXRlIjoiQ2FsbEV4cHJlc3Npb24ifX1dLCJmaWxlUGF0aCI6InNyYy9jb21wb25lbnRzL1N1YnNjcmliZS5qc3giLCJpZCI6Ijk3NjdjNDgxLTYwOWEtNDUxYi05YTk5LTNhNzk2NGYwZjFiOSJ9"
});
export default function Subscribe() {
  return <Box bg="var(--lightBgColor)" py="40px">
      <Container maxW="1140px">
        <IterateFlex justify="space-between" flexDirection={{
        base: "column",
        md: "column",
        xl: "row"
      }} gap={{
        base: "40px",
        md: "40px",
        xl: "0"
      }}>
          <Stack gap="20px">
            <Text as="h4" color="var(--darkBgColor)" fontSize="46px" fontWeight="900" lineHeight="60px">
              Subscribe for updates
            </Text>
            <Text color="var(--lightTextColor3)" fontSize="20px" lineHeight="30px">
              Subscribe for exclusive early sale access and new arrivals.
            </Text>

            <form data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiZmJiZDdjZTctYmRjMC00MTljLWI0YzItNDcxZTRhMTk4YjYxIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9TdWJzY3JpYmUuanN4In0=">
              <Text as="label" color="var(--darkTextColor2)">
                Email
              </Text>
              <IterateFlex my="20px">
                <input type="text" className="applyInput" placeholder="Your working email" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiOGI3Y2RiZDYtODZhZS00YTI1LTg5ZjgtNWRiOTkxYjU3M2ZiIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9TdWJzY3JpYmUuanN4In0=" />
                <IterateFlex justify="center" align="center" bg="var(--primary)" color="var(--light)" px="40px" borderRadius="4px" _hover={{
                cursor: "pointer"
              }} onClick={() => {
                mixpanel.track("subscribe_clicked", {
                  Location: "Subscribe",
                  date: new Date().toISOString()
                }, e => {
                  console.log(e);
                });
              }}>
                  Subscribe
                </IterateFlex>
              </IterateFlex>
              <IterateFlex align="center" gap="10px" mt={4}>
                <Box>
                  <Image src={checked} />
                </Box>
                <Text fontSize="14px">
                  I agree to receive communications from Createx Store.
                </Text>
              </IterateFlex>
            </form>
          </Stack>
          <IterateFlex justify="center" align="center">
            <Image src={img} />
          </IterateFlex>
        </IterateFlex>
      </Container>
    </Box>;
}