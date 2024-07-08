import React from "react";
import loadingGif from "../assets/images/icons/loading.gif";
import { Flex } from "@chakra-ui/react";
export default function Loading() {
  return <Flex w="full" h="full" align="center" justify="center">
      <img src={loadingGif} alt="loading" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiOTRjYjM2YjMtZjQ2My00MjYzLWFhZDUtY2I1MGUyZjcwNTE0IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9Mb2FkaW5nLmpzeCJ9" />
    </Flex>;
}