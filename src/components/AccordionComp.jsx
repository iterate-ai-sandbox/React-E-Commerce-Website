import React from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export default function AccordionComp() {
  return <Accordion allowMultiple>
      <AccordionItem my="10px">
        {({
        isExpanded
      }) => <>
            <h2 data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiOGI4N2Q1NWQtNmEzNi00NmU0LTlkYTctZjVkOTFhMjk3ZGJiIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9BY2NvcmRpb25Db21wLmpzeCJ9">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="20px" lineHeight="30px" fontWeight="700" color="var(--darkBgColor)">
                  Do I need to register to place an order?
                </Box>
                {isExpanded ? <AiOutlineMinus fontSize="12px" /> : <AiOutlinePlus fontSize="12px" />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
              elementum faucibus dignissim purus. Fusce parturient diam magna
              ullamcorper morbi semper massa ac facilisis.
            </AccordionPanel>
          </>}
      </AccordionItem>
      <AccordionItem my="10px">
        {({
        isExpanded
      }) => <>
            <h2 data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiMzc1MmIyZjAtZjFjMS00YWI0LTlkYTYtNTY1NzRjNDM1YWQ0IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9BY2NvcmRpb25Db21wLmpzeCJ9">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="20px" lineHeight="30px" fontWeight="700" color="var(--darkBgColor)">
                  What is the estimated delivery time?
                </Box>
                {isExpanded ? <AiOutlineMinus fontSize="12px" /> : <AiOutlinePlus fontSize="12px" />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>}
      </AccordionItem>
      <AccordionItem my="10px">
        {({
        isExpanded
      }) => <>
            <h2 data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNzJiOWM1YWQtMTdjOC00ZjA1LTk1MzItOTQ1NjIxNmEzMDI0IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9BY2NvcmRpb25Db21wLmpzeCJ9">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="20px" lineHeight="30px" fontWeight="700" color="var(--darkBgColor)">
                  How can I pay for my order?
                </Box>
                {isExpanded ? <AiOutlineMinus fontSize="12px" /> : <AiOutlinePlus fontSize="12px" />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
              elementum faucibus dignissim purus. Fusce parturient diam magna
              ullamcorper morbi semper massa ac facilisis.
            </AccordionPanel>
          </>}
      </AccordionItem>
      <AccordionItem my="10px">
        {({
        isExpanded
      }) => <>
            <h2 data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiYjllNGRmZmYtNDc2Ny00OGI5LTk3NWMtMjQ0NDEwMDRlNDhjIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9BY2NvcmRpb25Db21wLmpzeCJ9">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="20px" lineHeight="30px" fontWeight="700" color="var(--darkBgColor)">
                  Can I get a refund if the price has changed since I ordered
                  it?
                </Box>
                {isExpanded ? <AiOutlineMinus fontSize="12px" /> : <AiOutlinePlus fontSize="12px" />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>}
      </AccordionItem>
      <AccordionItem my="10px">
        {({
        isExpanded
      }) => <>
            <h2 data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNDc4MGE2NjYtNDdmNi00YzQxLTk5YjMtNTg4ZmEwNDg2MGQ4IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9BY2NvcmRpb25Db21wLmpzeCJ9">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="20px" lineHeight="30px" fontWeight="700" color="var(--darkBgColor)">
                  Do you refund delivery charges if I return something?
                </Box>
                {isExpanded ? <AiOutlineMinus fontSize="12px" /> : <AiOutlinePlus fontSize="12px" />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>}
      </AccordionItem>
      <AccordionItem my="10px">
        {({
        isExpanded
      }) => <>
            <h2 data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNjNmNmYyZDktOTQ2ZS00MmQ0LWJiZDctZmRjNTI4YTNlMzFkIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9BY2NvcmRpb25Db21wLmpzeCJ9">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="20px" lineHeight="30px" fontWeight="700" color="var(--darkBgColor)">
                  Do you refund delivery charges if I return something?
                </Box>
                {isExpanded ? <AiOutlineMinus fontSize="12px" /> : <AiOutlinePlus fontSize="12px" />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>}
      </AccordionItem>
      <AccordionItem my="10px">
        {({
        isExpanded
      }) => <>
            <h2 data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiMmEzZjc3MzItZmQ4Zi00YzUyLTk0MTAtZGYzZjgzMmZmMzIxIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9BY2NvcmRpb25Db21wLmpzeCJ9">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="20px" lineHeight="30px" fontWeight="700" color="var(--darkBgColor)">
                  What documents will be provided with the order?
                </Box>
                {isExpanded ? <AiOutlineMinus fontSize="12px" /> : <AiOutlinePlus fontSize="12px" />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>}
      </AccordionItem>
      <AccordionItem my="10px">
        {({
        isExpanded
      }) => <>
            <h2 data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNjljNGE4Y2MtMjdhNS00MmJhLWFjNzEtM2MxMGU2YjE4YTIzIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9BY2NvcmRpb25Db21wLmpzeCJ9">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="20px" lineHeight="30px" fontWeight="700" color="var(--darkBgColor)">
                  Can I return the order to the courier if anything does not
                  suit me?
                </Box>
                {isExpanded ? <AiOutlineMinus fontSize="12px" /> : <AiOutlinePlus fontSize="12px" />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>}
      </AccordionItem>
    </Accordion>;
}