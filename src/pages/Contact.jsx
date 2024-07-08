import { Box, Container, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import mixpanel from "mixpanel-browser";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoTwitter, BiMessageRoundedDetail } from "react-icons/bi";
import { BsChevronRight, BsPhone } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import { ROUTES } from "../utils/routes";
import IterateWrapper from "../IterateUtil";
const IterateFlex = IterateWrapper(Flex, {
  "data-iterate": "eyJldmVudHMiOlt7Im5hbWUiOiJzZW5kX21lc3NhZ2VfY2xpY2tlZCIsImF0dHJpYnV0ZXMiOnsiTG9jYXRpb24iOiJDb250YWN0IiwiZGF0ZSI6IkNhbGxFeHByZXNzaW9uIn19XSwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3giLCJpZCI6IjE0ODljYTdkLWFjOTQtNGIyNy04OGNlLWM5YjMzNjBjNjk0ZCJ9"
});
export default function Contact() {
  return <>
      <Box bg="var(--lightBgColor)" py="10px">
        <Container maxW="1140px">
          <IterateFlex gap="10px" color="var(--darkTextColor2)" align="center">
            <Link to={ROUTES.HOME}>
              <GrHomeRounded />
            </Link>
            <BsChevronRight />
            <Text color="var(--lightTextColor5)">Contacts</Text>
          </IterateFlex>
        </Container>
      </Box>
      <Container maxW="1140px">
        <Grid templateColumns={{
        base: "repeat(1, 1fr)",
        md: "1fr 2fr",
        lg: "1fr 3fr"
      }} py="40px" mb="80px" gap={{
        base: "20px",
        md: "30px",
        lg: "0"
      }}>
          <Text as="h3" color="var(--primary)" fontSize="28px" fontWeight="700" lineHeight="42ox">
            Contact us
          </Text>
          <Stack>
            <Text fontSize="20px" lineHeight="30px" color="var(--darkBgColor)" fontWeight="700">
              If you have any questions, concerns or comments, we would love to
              hear from you! Submit your query using any of the methods below:
            </Text>
            <Stack gap="10px" my="24px">
              <IterateFlex gap="10px" color="var(--primary)" align="center">
                <BsPhone size={20} />
                <Text color="var(--darkTextColor2)" fontWeight="600">
                  (405) 555-0128
                </Text>
              </IterateFlex>
              <IterateFlex gap="10px" color="var(--primary)" align="center">
                <AiOutlineMail size={20} />
                <Text color="var(--darkTextColor2)" fontWeight="600">
                  Send us an email
                </Text>
              </IterateFlex>
              <IterateFlex gap="10px" color="var(--primary)" align="center">
                <BiMessageRoundedDetail size={20} />
                <Text color="var(--darkTextColor2)" fontWeight="600">
                  Connect on Messenger
                </Text>
              </IterateFlex>
              <IterateFlex gap="10px" color="var(--primary)" align="center">
                <BiLogoTwitter size={20} />
                <Text color="var(--darkTextColor2)" fontWeight="600">
                  Tweet us
                </Text>
              </IterateFlex>
            </Stack>

            <Text fontSize="20px" lineHeight="30px" color="var(--darkBgColor)" fontWeight="700" my="20px">
              Or get in touch with us by completing the below form:
            </Text>

            <form data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiMzgxMWY2ZjEtNDI4NC00YmJiLThmYWEtMmQxNWM2NzljNmEwIiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==">
              <Stack gap="20px">
                <IterateFlex justify="space-between" flexDirection={{
                base: "column",
                md: "row",
                xl: "row"
              }} gap={{
                base: "20px",
                md: "0",
                xl: "0"
              }}>
                  <Stack w={{
                  base: "full",
                  md: "45%",
                  xl: "48%"
                }}>
                    <label color="var(--darkTextColor2)" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiYWYzMmM4OGItYzA1ZS00OTE5LThkMzQtM2I5ZWY2NDNjMzY2IiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==">Full Name*</label>
                    <input type="text" placeholder="Your working email" className="contactInput" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiYjQ0N2VkZDUtYzEyNi00MmMyLWE3YTgtNWU3NWUyODMwMzc1IiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==" />
                  </Stack>
                  <Stack w={{
                  base: "full",
                  md: "45%",
                  xl: "48%"
                }}>
                    <label color="var(--darkTextColor2)" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiYTNlZDQ2ODQtM2FmNS00NTRhLTg4MjQtYjNhYTdmMTFiNTVhIiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==">Email*</label>
                    <input type="text" placeholder="Your email" className="contactInput" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiMDdlOWMxODMtNmFkMC00YzEzLWJkOTktYWZiYjM1YmUzOTBlIiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==" />
                  </Stack>
                </IterateFlex>
                <IterateFlex justify="space-between" flexDirection={{
                base: "column",
                md: "row",
                xl: "row"
              }} gap={{
                base: "20px",
                md: "0",
                xl: "0"
              }}>
                  <Stack w={{
                  base: "full",
                  md: "45%",
                  xl: "48%"
                }}>
                    <label color="var(--darkTextColor2)" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiM2M4YzA2MmMtNDJhYy00MjExLWI0MzgtMWQ5NmJjZTNiMWQ1IiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==">Phone</label>
                    <input type="text" placeholder="Your phone number" className="contactInput" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiOGNkZWY2YmMtZDVjNC00NmRlLTg3MTUtNWU2Njk1MjFlNjIxIiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==" />
                  </Stack>
                  <Stack w={{
                  base: "full",
                  md: "45%",
                  xl: "48%"
                }}>
                    <label color="var(--darkTextColor2)" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiYjI1YjRlMzUtZDQzNS00ZWJkLWE5MDctMTY1MWVjY2FmMGY0IiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==">Subject</label>
                    <input type="text" placeholder="Title your message" className="contactInput" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNmZiOTA5YTMtY2VlMC00N2U0LTg1MTktMTk1OTIyODMzNDU2IiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==" />
                  </Stack>
                </IterateFlex>
                <label color="var(--darkTextColor2)" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiOTI1MmNmNTEtNzNiMS00ODQyLTk2Y2EtNWNiOWM5MjA4Nzk2IiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==">Message*</label>
                <textarea placeholder="Write your message here" className="contactInput" rows={5} data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiN2E1MTFlN2MtODc3Yi00ZWQ1LTkwZTAtNDcyNWYwY2VkYjlkIiwiZmlsZVBhdGgiOiJzcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==" />

                <IterateFlex onClick={() => {
                mixpanel.track("send_message_clicked", {
                  Location: "Contact",
                  date: new Date().toISOString()
                });
              }} w={{
                base: "full",
                md: "40%",
                xl: "40%"
              }} bg="var(--primary)" color="var(--light)" borderRadius="4px" justify="center" align="center" py="10px" border="1px solid var(--primary)" _hover={{
                bg: "transparent",
                color: "var(--primary)",
                transition: "0.8s",
                cursor: "pointer"
              }}>
                  Send message
                </IterateFlex>
              </Stack>
            </form>
          </Stack>
        </Grid>
      </Container>
      <Subscribe />
    </>;
}