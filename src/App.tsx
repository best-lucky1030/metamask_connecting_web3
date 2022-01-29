// App.tsx
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import ConnectButton from './components/ConnectButton';
import AccuontModal from './components/AccountModal';

export default function App() {
  // Pull the disclosure methods
  return (
    // lets us use Chakra UI syntax across our app:
    <ChakraProvider>
      <Layout>
        {/* Our connect button will only handle opening */}
        <ConnectButton />
        <AccuontModal />
      </Layout>
    </ChakraProvider>
  )
}
