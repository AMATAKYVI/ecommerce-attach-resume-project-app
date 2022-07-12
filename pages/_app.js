import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import store from '../store/store';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

const progress = new ProgressBar({
  size: 4,
  color: 'rgb(249, 250, 251)',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
