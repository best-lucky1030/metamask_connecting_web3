// App.tsx
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';

export default function App() {
  return (
    // lets us use Chakra UI syntax across our app:
    <ChakraProvider>
      <Layout>
        <p style={{ color: "white" }}>Hello, world!</p>
      </Layout>
    </ChakraProvider>
  )
}
