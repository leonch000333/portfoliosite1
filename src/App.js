import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './router/Router';
import { Home } from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
