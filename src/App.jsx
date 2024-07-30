import mixpanel from 'mixpanel-browser';
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from './components/Footer';
import Header from './components/header/Header';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Details from './pages/Details';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Stores from './pages/Stores';
import { ROUTES } from './utils/routes';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

let getInstanceFromNode;
let getNodeFromInstance;
const secret = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
if (secret && secret.Events && secret.Events[0]) {
  getInstanceFromNode = secret.Events[0];
  getNodeFromInstance = secret.Events[1];
} else {
  console.warn('logrocket-react does not work with this version of React');
}

function setupReact() {
  const listener = (event) => {
    try {
      const fiberNode = getInstanceFromNode(event.target);
      const domNode = getNodeFromInstance(fiberNode);
      const names = [];
      let currentElement = fiberNode;
      while (currentElement && currentElement.elementType !== 'function') {
        const name = typeof currentElement.elementType === 'function'
        const nameVal = currentElement.elementType.name
        console.log('🍌', nameVal)
        if (nameVal) {
          names.push(nameVal);
        }
        currentElement = currentElement.return;
      }
      console.log('names: ', names)
      console.log('Fiber node names:', fiberNode);
      console.log('Fiber to DOM node: ', domNode);
    } catch (err) {
      console.error(
        'logrocket-react caught an error while hooking into React. Please make sure you are using the correct version of logrocket-react for your version of react-dom.',
        err
      );
    }
  };

  document.body.addEventListener('click', listener, { passive: true });
}

export default function App() {
  useEffect(() => {
    console.log(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
    console.log('hi');
    setupReact();
  }, []);
  mixpanel.init(import.meta.env['VITE_MIXPANEL_TOKEN']);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} exact />
        <Route path={ROUTES.ABOUT} element={<About />} exact />
        <Route path={ROUTES.PRODUCTDETAILS} element={<Details />} exact />
        <Route path={ROUTES.SHOPPINGCART} element={<ShoppingCart />} exact />
        <Route path={ROUTES.BLOG} element={<Blog />} exact />
        <Route path={ROUTES.BLOGDETAILS} element={<BlogDetails />} exact />
        <Route path={ROUTES.STORES} element={<Stores />} exact />
        <Route path={ROUTES.FAG} element={<FAQ />} exact />
        <Route path={ROUTES.CONTACT} element={<Contact />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}
