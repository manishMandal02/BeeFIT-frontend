import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { UserProvider } from './context/UserContext';
import axiosConfig from './lib/axiosConfig';
import { ChakraProvider } from '@chakra-ui/react';
import chakraThemeConfig from './lib/chakraConfig';
import AppRouter from './routes/Router';

// all configs
// *****
// axios config
axiosConfig();
// chakra theme
const chakraTheme = chakraThemeConfig();

function App() {
  return (
    <UserProvider>
      <ChakraProvider theme={chakraTheme}>
        <BrowserRouter>
          <div className='bg-slate-50 w-screen h-full'>
            <AppRouter />
          </div>
        </BrowserRouter>
      </ChakraProvider>
    </UserProvider>
  );
}

export default App;
