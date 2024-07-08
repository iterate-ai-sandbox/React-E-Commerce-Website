import { Box, Container, Flex, Image } from "@chakra-ui/react";
import mixpanel from "mixpanel-browser";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { getCartTotal } from "../../redux/cartSlice";
import { ROUTES } from "../../utils/routes";
import SpecialOffer from "../SpecialOffer";
import Topbar from "./Topbar";
import IterateWrapper from "../../IterateUtil";
const IterateIterateLink = IterateWrapper(IterateLink, {
  "data-iterate": "eyJldmVudHMiOlt7Im5hbWUiOiJzdG9yZXNfY2xpY2tlZCIsImF0dHJpYnV0ZXMiOnsibG9jYXRpb24iOiJIZWFkZXIiLCJwcmV2aW91c19jbGlja3MiOiIzIn19XSwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCIsImlkIjoiNThmNmU2OWEtNmE4Ni00NDIwLTk1ZGYtYTJhMGZjNjc1NTNmIn0="
});
const IterateLink = IterateWrapper(Link, {
  "data-iterate": "eyJldmVudHMiOlt7Im5hbWUiOiJmYXFfY2xpY2tlZCIsImF0dHJpYnV0ZXMiOnsiTG9jYXRpb24iOiJIZWFkZXIiLCJkYXRlIjoiQ2FsbEV4cHJlc3Npb24ifX1dLCJmaWxlUGF0aCI6InNyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4IiwiaWQiOiIxMjdhNmZmMi0yZTkyLTRjM2ItODYwMy1hN2MyNjMyMGE2ZWIifQ=="
});
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    carts,
    itemCount
  } = useSelector(state => state.carts);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return <>
      <Box position="sticky" top="0" zIndex="100">
        <Topbar />
        <Box w="full" bg="var(--light)">
          <Container maxW="1140px">
            <Flex justify="space-between" align="center" py={{
            base: "16px",
            md: "0",
            xl: "0"
          }}>
              <IterateIterateLink to={ROUTES.HOME}>
                <Image src={logo} alt="logo" w="full" h="full" />
              </IterateIterateLink>
              <Box position="relative" ml={{
              base: "0",
              md: "0",
              xl: "22px"
            }} mr={{
              base: "30px",
              md: "0",
              xl: "0"
            }} display={{
              base: "block",
              md: "none",
              xl: "none"
            }} onClick={() => navigate("cart")} _hover={{
              cursor: "pointer"
            }}>
                <AiOutlineShoppingCart size={30} />
                <Flex position="absolute" top="-5px" right="-10px" width="20px" height="20px" borderRadius="50%" backgroundColor="var(--primary)" color="#fff" justifyContent="center" alignItems="center">
                  {itemCount}
                  {/* {carts?.length} */}
                </Flex>
              </Box>
              <Box className="hamburger" onClick={handleClick} _hover={{
              cursor: "pointer"
            }} zIndex="55" position="absolute" right="10px" top="60px">
                {click ? <FaTimes color="var(--light)" size={24} /> : <FaBars color="var(--primary)" size={24} />}
              </Box>

              <Flex alignItems="center" justify="space-between" gap="20px" className={click ? "nav-menu active" : "nav-menu"}>
                <Flex className="flex-out-nav" align="center">
                  <nav style={{
                  paddingTop: "30px"
                }} data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiMmYyNGNlZTEtMzY0Zi00YTViLThjNGYtYzViYTgxOTQ0ZTZhIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                    <ul data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiZDEzMzYzY2MtYWQ2NC00Zjg3LWI4MjMtNGZiZWM3M2UyNzZmIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                      <Flex className="flex-in-ul" align="center" gap={{
                      base: "60px",
                      md: "0",
                      xl: "30px"
                    }}>
                        <li data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiYWM5OTllOGEtZWMxZS00OGQzLTk2OTgtNjkxMDdiMDI0NGMwIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                          <IterateIterateLink to={ROUTES.BLOG}>Blog</IterateIterateLink>
                        </li>
                        <li data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiYjJlNmE4MWEtN2MyMS00NTllLWE3YjEtZjdmZTdiNWY1ZjM2IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                          <IterateIterateLink onClick={() => {
                          mixpanel.track("faq_clicked", {
                            Location: "Header",
                            date: new Date().toISOString()
                          });
                        }} to={ROUTES.FAG}>
                            FAQ
                          </IterateIterateLink>
                        </li>
                        <li data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiY2NjNTdmNDAtNTBiMy00YmZkLWI5NjctYjNkM2M2OTExOWRkIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                          <IterateIterateLink onClick={() => {
                          mixpanel.track("stores_clicked", {
                            location: "Header",
                            previous_clicks: "3"
                          });
                        }} to={ROUTES.STORES}>Stores</IterateIterateLink>
                        </li>
                        <li data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiY2EyNmQ4MzAtY2NjOC00YWRlLTg1ZDEtYzIwNmEzYTcyYTQxIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                          <IterateIterateLink to={ROUTES.CONTACT}>Contacts</IterateIterateLink>
                        </li>
                      </Flex>
                    </ul>
                  </nav>
                  <Box position="relative" ml={{
                  base: "0",
                  md: "0",
                  xl: "22px"
                }} display={{
                  base: "none",
                  md: "block",
                  xl: "block"
                }} onClick={() => navigate("cart")} _hover={{
                  cursor: "pointer"
                }}>
                    <AiOutlineShoppingCart size={30} />
                    <Flex position="absolute" top="-5px" right="-10px" width="20px" height="20px" borderRadius="50%" backgroundColor="var(--primary)" color="#fff" justifyContent="center" alignItems="center">
                      {itemCount}
                      {/* {carts?.length} */}
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Box>
      <SpecialOffer />
    </>;
}