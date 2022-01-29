// App.tsx
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import theme from './theme';
import Layout from './components/Layout';
import ConnectButton from './components/ConnectButton';
import AccuontModal from './components/AccountModal';
import "@fontsource/inter";

function App() {
  // Pull the disclosure methods
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {/* Our connect button will only handle opening */}
        <ConnectButton handleOpenModal = {onOpen} />
        {/* Our Account modal will handle open state & closing */}
        <AccuontModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
