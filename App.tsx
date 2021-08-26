import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ThemeProvider} from 'styled-components'
import AppLoading from 'expo-app-loading'

// import { Dashboard } from './src/pages/Dashboard';
import {RegisterTransaction} from './src/pages/RegisterTransaction';

import theme from './src/global/styles/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { HighlightCard } from './src/components/HightlightCard';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <RegisterTransaction />
    </ThemeProvider>
  );
}
