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
const IterateLink = IterateWrapper(Link, {
  "data-iterate": "eyJldmVudHMiOlt7Im5hbWUiOiJmYXFfY2xpY2tlZCIsImF0dHJpYnV0ZXMiOnsiTG9jYXRpb24iOiJIZWFkZXIiLCJkYXRlIjoiQ2FsbEV4cHJlc3Npb24ifX1dLCJmaWxlUGF0aCI6InNyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4IiwiaWQiOiJkMzU0YWUxOS0yNWQ1LTRiYjMtODg3Yy1kYTYyOWY1NjM0N2QifQ=="
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
              <IterateLink to={ROUTES.HOME}>
                <Image src={logo} alt="logo" w="full" h="full" />
              </IterateLink>
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
                }} data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiMWNmNmZmZmMtNzA5NC00YzZhLThkMTgtNjAxYzk0ZDIwYWI4IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                    <ul data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNGY2MTJkNDUtNDA1ZC00MDVkLTlkYjUtNjhjYzk3YTFlNzBiIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                      <Flex className="flex-in-ul" align="center" gap={{
                      base: "60px",
                      md: "0",
                      xl: "30px"
                    }}>
                        <li data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNDQ1NTQ2YWQtMzM2MC00NDM1LTg1MWUtNjU1NDM5NzA0Zjg5IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                          <IterateLink to={ROUTES.BLOG}>Blog</IterateLink>
                        </li>
                        <li data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNTdmMDRiOWMtNDQzMC00ODUyLWE3YjctNzE5NDk2NjZlYTA3IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                          <IterateLink onClick={() => {
                          mixpanel.track("faq_clicked", {
                            Location: "Header",
                            date: new Date().toISOString()
                          });
                        }} to={ROUTES.FAG}>
                            FAQ
                          </IterateLink>
                        </li>
                        <li data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiMWY5OGIxZTktZjQ0Mi00ZjQyLWJhNGQtZjc5OWEwMTAzZDA1IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                          <IterateLink to={ROUTES.STORES}>Stores</IterateLink>
                        </li>
                        <li data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNjY2MGQ5ZjgtMTViOS00NzgwLWJmMjEtZGRkMDJlYWViODcwIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJ9">
                          <IterateLink to={ROUTES.CONTACT}>Contacts</IterateLink>
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